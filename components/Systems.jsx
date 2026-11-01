"use client";
import { useEffect, useState } from "react";
import { systems } from "@/lib/data";
import { useReducedMotion } from "./SceneProvider";

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M5 9 L6 4 L10 7 Z M19 9 L18 4 L14 7 Z" fill="currentColor" />
      <rect x="3" y="6" width="18" height="14" rx="6" fill="currentColor" />
      <rect x="6" y="9.5" width="12" height="7" rx="3" fill="#1B2340" />
      <circle cx="9.5" cy="13" r="1.6" fill="#3DD6D0" />
      <circle cx="14.5" cy="13" r="1.6" fill="#3DD6D0" />
    </svg>
  );
}

export default function Systems() {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const sys = systems.list[tab];
  const n = sys.steps.length;

  useEffect(() => {
    setActive(0);
    if (reduced) { setActive(n - 1); return; }
    const id = setInterval(() => setActive((a) => (a + 1) % (n + 1)), 1300);
    return () => clearInterval(id);
  }, [tab, n, reduced]);

  const shown = Math.min(active, n - 1);
  const progress = n > 1 ? (shown / (n - 1)) * 100 : 0;

  return (
    <section className="section" id="systems">
      <div className="panel">
        <p className="kicker">
          {systems.org}, {systems.observatory}{" "}
          <span lang="ar" dir="rtl">({systems.observatoryAr})</span>
        </p>
        <h2 className="section-title">From fully manual to AI-powered</h2>
        <p className="section-lead">{systems.intro}</p>

        <div className="shift">
          <div className="shift-col before">
            <h3>Before</h3>
            <ul>{systems.before.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="shift-arrow" aria-hidden="true">
            <svg viewBox="0 0 48 24" width="48" height="24"><path d="M2 12h40M32 3l10 9-10 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="shift-col after">
            <h3>After</h3>
            <ul>{systems.after.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>

        <h3 className="sub-title">The agent systems I built</h3>

        <div className="tabs" role="tablist" aria-label="Agent systems">
          {systems.list.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === tab}
              aria-controls={`panel-${s.id}`}
              className={`tab ${i === tab ? "active" : ""}`}
              onClick={() => setTab(i)}
            >
              <span>{s.name}</span>
              <small>{s.schedule}</small>
            </button>
          ))}
        </div>

        <div className="system" role="tabpanel" id={`panel-${sys.id}`} aria-labelledby={`tab-${sys.id}`}>
          <div className="system-head">
            <p className="system-summary">{sys.summary}</p>
            <p className="system-period">{sys.period}</p>
          </div>
          <ol className="pipeline" style={{ "--progress": progress, "--steps": n }}>
            {sys.steps.map((step, i) => (
              <li key={step.title} className={`${i < shown ? "done" : ""} ${i === shown ? "current" : ""}`}>
                <span className="node"><BotIcon /></span>
                <span className="step-num">Agent {i + 1}</span>
                <strong>{step.title}</strong>
                <span className="step-detail">{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
