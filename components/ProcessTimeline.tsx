import { processSteps } from "@/lib/site";

/**
 * The 2–4 week journey, keys to handover. Server-rendered; each step reveals
 * on scroll via the global Reveals engine (data-reveal).
 */
export default function ProcessTimeline() {
  return (
    <div className="timeline">
      {processSteps.map((s) => (
        <div className="tl-step" key={s.day} data-reveal>
          <div className="tl-day">{s.day}</div>
          <div>
            <h3 className="tl-h">{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
