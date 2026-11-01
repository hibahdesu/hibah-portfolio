"use client";
import { useEffect, useRef, useState } from "react";
import { useScene, useReducedMotion } from "./SceneProvider";

const LINES = {
  any: [
    "Beep boop. Meow.",
    "I'm Lucy. Hibah built my brain.",
    "I classify posts faster than I chase lasers.",
    "Try the scene switcher in the corner.",
    "Purr-formance: fully optimized.",
    "Ask Hibah about multi-agent systems.",
  ],
  night: ["It's late. Hibah's agents are still on shift.", "My eyes glow so I never miss a data point."],
  dawn: ["Early bird? Early cat. Early bot."],
  fall: ["I tried to classify every leaf. Too many."],
  winter: ["Snow day! My circuits stay toasty."],
  spring: ["Achoo. Even robots get pollen in the fans."],
  summer: ["Sunglasses on. Cooling fans at max."],
};

export default function RoboCat({ size = 320, interactive = true, hint = "" }) {
  const svgRef = useRef(null);
  const { season, time } = useScene();
  const reduced = useReducedMotion();
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [bubble, setBubble] = useState(null);
  const [hop, setHop] = useState(false);
  const count = useRef(0);

  // Eyes follow the pointer.
  useEffect(() => {
    if (!interactive) return;
    const move = (e) => {
      const r = svgRef.current?.getBoundingClientRect();
      if (!r) return;
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.42;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 300);
      setLook({ x: (dx / d) * 6 * k, y: (dy / d) * 5 * k });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [interactive]);

  // Random blinks.
  useEffect(() => {
    if (reduced) return;
    let t;
    const loop = () => {
      t = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        loop();
      }, 2500 + Math.random() * 3500);
    };
    loop();
    return () => clearTimeout(t);
  }, [reduced]);

  const speak = () => {
    const pool = [...LINES.any, ...(LINES[time] || []), ...(LINES[season] || [])];
    setBubble(pool[count.current++ % pool.length]);
    if (!reduced) { setHop(true); setTimeout(() => setHop(false), 450); }
  };

  useEffect(() => {
    if (!bubble) return;
    const t = setTimeout(() => setBubble(null), 3200);
    return () => clearTimeout(t);
  }, [bubble]);

  const night = time === "night" || time === "dusk";
  const shades = season === "summer" && !night;

  return (
    <div className="robocat-wrap" style={{ width: size }}>
      {bubble && <p className="cat-bubble" role="status">{bubble}</p>}
      <button
        type="button"
        className={`robocat ${hop ? "hop" : ""} ${night ? "glow" : ""}`}
        onClick={interactive ? speak : undefined}
        aria-label="Lucy, the robot cat. Click to hear what Lucy says."
        tabIndex={interactive ? 0 : -1}
      >
        <svg ref={svgRef} viewBox="0 0 240 250" width={size} height={size * (250 / 240)}>
          <defs>
            <linearGradient id="shell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--cat-shell-1)" />
              <stop offset="1" stopColor="var(--cat-shell-2)" />
            </linearGradient>
            <radialGradient id="eyeGlow">
              <stop offset="0" stopColor="#B8FFFB" />
              <stop offset="1" stopColor="#3DD6D0" />
            </radialGradient>
          </defs>

          {/* tail */}
          <g className="cat-tail">
            <path d="M168 205 C 205 205, 222 175, 212 150 C 206 136, 192 138, 196 150" fill="none" stroke="url(#shell)" strokeWidth="14" strokeLinecap="round" />
            <circle cx="196" cy="150" r="5" fill="var(--accent)" />
          </g>

          {/* body */}
          <rect x="72" y="150" width="96" height="78" rx="30" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" />
          <rect x="98" y="172" width="44" height="30" rx="10" fill="#1B2340" />
          <path className="cat-heart" d="M120 194 l-8 -8 a5 5 0 0 1 8 -6 a5 5 0 0 1 8 6 z" fill="var(--accent)" />
          <ellipse cx="96" cy="230" rx="16" ry="9" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" />
          <ellipse cx="144" cy="230" rx="16" ry="9" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" />

          {/* antenna */}
          <line x1="120" y1="44" x2="120" y2="20" stroke="var(--cat-line)" strokeWidth="3" strokeLinecap="round" />
          <circle className="cat-led" cx="120" cy="16" r="6" fill="var(--accent)" />

          {/* ears */}
          <path d="M52 70 L58 18 L102 46 Z" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M188 70 L182 18 L138 46 Z" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M64 56 L67 32 L88 46 Z" fill="var(--accent)" opacity=".75" />
          <path d="M176 56 L173 32 L152 46 Z" fill="var(--accent)" opacity=".75" />

          {/* head */}
          <rect x="36" y="40" width="168" height="120" rx="50" fill="url(#shell)" stroke="var(--cat-line)" strokeWidth="2" />
          <circle cx="50" cy="100" r="7" fill="var(--cat-line)" opacity=".35" />
          <circle cx="190" cy="100" r="7" fill="var(--cat-line)" opacity=".35" />

          {/* face screen */}
          <rect x="60" y="66" width="120" height="72" rx="28" fill="#1B2340" />
          <g className={`cat-eyes ${blink ? "blink" : ""}`}>
            <g transform={`translate(${look.x} ${look.y})`}>
              <ellipse cx="96" cy="100" rx="12" ry="14" fill="url(#eyeGlow)" />
              <ellipse cx="144" cy="100" rx="12" ry="14" fill="url(#eyeGlow)" />
              <circle cx="100" cy="95" r="4" fill="#fff" />
              <circle cx="148" cy="95" r="4" fill="#fff" />
            </g>
          </g>
          <path d="M110 122 q5 6 10 0 q5 6 10 0" fill="none" stroke="#3DD6D0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="76" cy="124" r="5" fill="#F59AC0" opacity=".6" />
          <circle cx="164" cy="124" r="5" fill="#F59AC0" opacity=".6" />

          {/* whiskers */}
          <g stroke="var(--cat-line)" strokeWidth="2" strokeLinecap="round" opacity=".7">
            <line x1="34" y1="112" x2="6" y2="106" /><line x1="34" y1="122" x2="6" y2="126" />
            <line x1="206" y1="112" x2="234" y2="106" /><line x1="206" y1="122" x2="234" y2="126" />
          </g>

          {/* seasonal accessories */}
          {season === "fall" && (
            <g>
              <path d="M70 150 Q120 170 170 150 L172 162 Q120 182 68 162 Z" fill="var(--accent)" />
              <path d="M150 160 L160 200 L146 202 L140 164 Z" fill="var(--accent)" />
              <g stroke="#fff" strokeWidth="3" opacity=".55">
                <line x1="90" y1="158" x2="88" y2="170" /><line x1="120" y1="163" x2="120" y2="175" /><line x1="150" y1="158" x2="152" y2="170" />
              </g>
            </g>
          )}
          {season === "winter" && (
            <g>
              <path d="M66 58 Q120 -6 174 58 Z" fill="var(--accent)" />
              <rect x="62" y="50" width="116" height="16" rx="8" fill="#fff" />
              <circle cx="120" cy="12" r="11" fill="#fff" />
            </g>
          )}
          {season === "spring" && (
            <g transform="translate(70 34)">
              {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-9" rx="6" ry="9" fill="#F7B5CF" transform={`rotate(${a})`} />
              ))}
              <circle r="5" fill="#F2C14E" />
            </g>
          )}
          {shades && (
            <g>
              <rect x="74" y="88" width="42" height="24" rx="10" fill="#0D1226" />
              <rect x="124" y="88" width="42" height="24" rx="10" fill="#0D1226" />
              <line x1="116" y1="96" x2="124" y2="96" stroke="#0D1226" strokeWidth="4" />
              <line x1="80" y1="94" x2="92" y2="94" stroke="#fff" strokeWidth="3" opacity=".5" strokeLinecap="round" />
              <line x1="130" y1="94" x2="142" y2="94" stroke="#fff" strokeWidth="3" opacity=".5" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </button>
      {hint && <p className="hero-cat-hint" style={{ visibility: bubble ? "hidden" : "visible" }}>{hint}</p>}
    </div>
  );
}

// Small static face for the nav and footer.
export function CatMark({ size = 28 }) {
  return (
    <svg viewBox="0 0 64 56" width={size} height={size * (56 / 64)} aria-hidden="true">
      <path d="M8 22 L11 2 L26 13 Z M56 22 L53 2 L38 13 Z" fill="var(--accent)" />
      <rect x="4" y="10" width="56" height="44" rx="18" fill="var(--text)" />
      <rect x="12" y="20" width="40" height="24" rx="10" fill="#1B2340" />
      <circle cx="24" cy="31" r="4.5" fill="#3DD6D0" />
      <circle cx="40" cy="31" r="4.5" fill="#3DD6D0" />
    </svg>
  );
}
