"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Accent-matched custom dropdown. Renders a hidden input named `name` so it
 * submits with native FormData exactly like a <select>. Keyboard accessible.
 */
export default function Select({
  id,
  name,
  options,
  defaultValue,
}: {
  id?: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  const initial = defaultValue ?? options[0];
  const [value, setValue] = useState(initial);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(Math.max(0, options.indexOf(initial)));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const choose = (opt: string) => {
    setValue(opt);
    setActive(options.indexOf(opt));
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((a) => Math.min(options.length - 1, a + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((a) => Math.max(0, a - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (open) choose(options[active]);
        else setOpen(true);
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  };

  return (
    <div className={`sel${open ? " open" : ""}`} ref={ref}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        className="sel-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKey}
      >
        <span>{value}</span>
        <svg className="sel-chev" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="sel-panel" role="listbox" tabIndex={-1}>
        {options.map((opt, i) => (
          <li
            key={opt}
            role="option"
            aria-selected={opt === value}
            className={`sel-opt${opt === value ? " selected" : ""}${
              i === active ? " active" : ""
            }`}
            onMouseEnter={() => setActive(i)}
            onClick={() => choose(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}
