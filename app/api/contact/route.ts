import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  package?: string;
  unitSize?: string;
  purpose?: string;
  budget?: string;
  area?: string;
  message?: string;
  company?: string; // honeypot — humans never fill this
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Per-IP sliding-window rate limit. In-memory is fine: single container behind Caddy.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this connection. Please try again later." },
      { status: 429 }
    );
  }

  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot tripped: report success so the bot learns nothing, send nothing.
  if ((data.company || "").trim()) {
    return NextResponse.json({ ok: true, queued: false });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const pkg = (data.package || "—").trim();
  const unitSize = (data.unitSize || "—").trim();
  const purpose = (data.purpose || "—").trim();
  const budget = (data.budget || "—").trim();
  const area = (data.area || "—").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Please complete name, email and phone." },
      { status: 422 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "melissa.madonna95@gmail.com";
  const from = process.env.CONTACT_FROM || "Curated Living <onboarding@resend.dev>";

  // No key configured (e.g. domain not live yet): accept + log, don't fail the UX.
  if (!key) {
    console.log("[contact] (no RESEND_API_KEY) enquiry:", { name, email, phone, package: pkg, unitSize, purpose, budget, area });
    return NextResponse.json({ ok: true, queued: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry — ${pkg} — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage: ${pkg}\nUnit size: ${unitSize}\nPurpose: ${purpose}\nBudget: ${budget}\nArea / location: ${area}\n\n${message || "—"}`,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] resend error:", detail);
      return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, queued: true });
  } catch (e) {
    console.error("[contact] send failed:", e);
    return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
  }
}
