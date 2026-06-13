"use client";

import { useState } from "react";
import Select from "./Select";

const TYPES = [
  "Investor Essential — 1BR / studio to let",
  "Premium Living — elevated home",
  "Holiday Home — short-let / Airbnb",
  "Multiple units / portfolio",
  "Referral partner enquiry",
  "Not sure yet",
];

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-ok" role="status">
        <h3>Thank you.</h3>
        <p>
          Your enquiry is in. Melissa will be in touch shortly — usually the same day — to talk
          through your unit, budget and timeline.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {/* Honeypot — humans never see or fill this; bots auto-complete it. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="type">What do you need?</label>
          <Select id="type" name="type" options={TYPES} defaultValue={TYPES[0]} />
        </div>
        <div className="field">
          <label htmlFor="community">Community / area</label>
          <input id="community" name="community" type="text" placeholder="e.g. Dubai Marina" autoComplete="off" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about the unit</label>
        <textarea id="message" name="message" rows={5} required placeholder="Size, handover status, budget if you have one, and when you'd like it rent-ready." />
      </div>

      {status === "error" && <p className="form-error">{error}</p>}

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"} <span className="arr">→</span>
      </button>
    </form>
  );
}
