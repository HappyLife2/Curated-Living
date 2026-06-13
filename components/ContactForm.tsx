"use client";

import { useState } from "react";
import Select from "./Select";
import { packages, unitSizes } from "@/lib/site";

const PACKAGE_OPTIONS = [...packages.map((p) => p.name), "Not sure yet"];
const SIZE_OPTIONS = [...unitSizes, "Not sure yet"];
const PURPOSE_OPTIONS = [
  "To rent out (long-let)",
  "Personal use",
  "Sub-lease",
  "Airbnb / short-let",
  "Holiday home",
  "Other",
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
          through your unit, package and timeline.
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
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="package">Package</label>
          <Select id="package" name="package" options={PACKAGE_OPTIONS} defaultValue="Not sure yet" />
        </div>
        <div className="field">
          <label htmlFor="unitSize">Unit size</label>
          <Select id="unitSize" name="unitSize" options={SIZE_OPTIONS} defaultValue="Not sure yet" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="purpose">Purpose of the unit</label>
          <Select id="purpose" name="purpose" options={PURPOSE_OPTIONS} defaultValue={PURPOSE_OPTIONS[0]} />
        </div>
        <div className="field">
          <label htmlFor="budget">Budget (optional)</label>
          <input id="budget" name="budget" type="text" placeholder="e.g. AED 25,000" autoComplete="off" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="area">Area / location of property</label>
        <input id="area" name="area" type="text" placeholder="e.g. Dubai Marina" autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="message">Anything else? (optional)</label>
        <textarea id="message" name="message" rows={4} placeholder="Handover status, timeline, or anything we should know." />
      </div>

      {status === "error" && <p className="form-error">{error}</p>}

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"} <span className="arr">→</span>
      </button>
    </form>
  );
}
