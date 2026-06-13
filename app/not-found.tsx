import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main>
      <header className="phead" style={{ minHeight: "70svh", display: "flex", alignItems: "center" }}>
        <div className="wrap">
          <span className="crumb">404</span>
          <h1>
            This room isn&apos;t<br /><em>furnished yet.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            The page you&apos;re looking for has moved, or was never built. Let&apos;s walk you back to
            somewhere finished.
          </p>
          <div className="on-dark" style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/" className="btn">Return home <span className="arr">→</span></Link>
            <Link href="/packages" className="btn-ghost">See the packages</Link>
          </div>
        </div>
      </header>
    </main>
  );
}
