/**
 * A clean, minimal "empty unit" — bare wall, tiled floor, a window with daylight.
 * Used as the BEFORE layer of the home transform reveal. Warm-neutral tones to sit
 * beside the furnished photo. Swap for a real empty-handover photo when available.
 */
export default function EmptyRoom() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%", display: "block" }}
      role="img"
      aria-label="An empty, unfurnished apartment — bare walls, tiled floor and a window"
    >
      <defs>
        <linearGradient id="er-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EEEAE1" />
          <stop offset="1" stopColor="#E3DDD1" />
        </linearGradient>
        <linearGradient id="er-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DBD4C5" />
          <stop offset="1" stopColor="#D0C8B7" />
        </linearGradient>
        <linearGradient id="er-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8F5EC" />
          <stop offset="1" stopColor="#E4DAC6" />
        </linearGradient>
        <linearGradient id="er-corner" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.07" />
          <stop offset="0.18" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* wall + floor */}
      <rect x="0" y="0" width="1600" height="582" fill="url(#er-wall)" />
      <rect x="0" y="582" width="1600" height="318" fill="url(#er-floor)" />

      {/* soft light pool from the window onto the floor */}
      <polygon points="930,582 1300,582 1380,900 1010,900" fill="#EFEBDF" opacity="0.55" />

      {/* floor tiles — receding horizontals + straight verticals */}
      <g stroke="#C6BEAC" strokeWidth="1.4" opacity="0.85">
        <line x1="0" y1="624" x2="1600" y2="624" />
        <line x1="0" y1="676" x2="1600" y2="676" />
        <line x1="0" y1="744" x2="1600" y2="744" />
        <line x1="0" y1="828" x2="1600" y2="828" />
        <line x1="200" y1="582" x2="180" y2="900" />
        <line x1="470" y1="582" x2="455" y2="900" />
        <line x1="740" y1="582" x2="735" y2="900" />
        <line x1="1010" y1="582" x2="1025" y2="900" />
        <line x1="1280" y1="582" x2="1310" y2="900" />
      </g>

      {/* skirting board */}
      <rect x="0" y="566" width="1600" height="16" fill="#D8D1C1" />
      <line x1="0" y1="566" x2="1600" y2="566" stroke="#BCB4A1" strokeWidth="1.5" />
      <line x1="0" y1="582" x2="1600" y2="582" stroke="#B4AB97" strokeWidth="2" />

      {/* window */}
      <rect x="952" y="120" width="396" height="312" fill="#BBB2A0" />
      <rect x="966" y="134" width="368" height="284" fill="url(#er-glass)" />
      <rect x="1144" y="134" width="12" height="284" fill="#BBB2A0" />
      <rect x="966" y="268" width="368" height="11" fill="#BBB2A0" />
      <rect x="940" y="432" width="420" height="16" fill="#CFC7B5" />

      {/* faint corner shadow for depth */}
      <rect x="0" y="0" width="1600" height="582" fill="url(#er-corner)" />
    </svg>
  );
}
