"use client";
import { useState } from "react";
import { useScene } from "./SceneProvider";
import { SEASONS, TIMES, SEASON_LABEL, TIME_LABEL, SEASON_ICON, TIME_ICON } from "@/lib/scene";

export default function SceneControls() {
  const { season, time, auto, preview, resetAuto } = useScene();
  const [open, setOpen] = useState(false);

  return (
    <div className={`scene-controls ${open ? "open" : ""}`}>
      {open && (
        <div className="scene-panel" id="scene-panel">
          <p className="scene-panel-title">Preview another scene</p>
          <div className="scene-group" role="group" aria-label="Season">
            {SEASONS.map((s) => (
              <button key={s} aria-pressed={season === s} onClick={() => preview({ season: s })}>
                <span aria-hidden="true">{SEASON_ICON[s]}</span> {SEASON_LABEL[s]}
              </button>
            ))}
          </div>
          <div className="scene-group" role="group" aria-label="Time of day">
            {TIMES.map((t) => (
              <button key={t} aria-pressed={time === t} onClick={() => preview({ time: t })}>
                <span aria-hidden="true">{TIME_ICON[t]}</span> {TIME_LABEL[t]}
              </button>
            ))}
          </div>
          <button className="scene-auto" disabled={auto} onClick={resetAuto}>
            {auto ? "Following your clock" : "Back to my real time"}
          </button>
        </div>
      )}
      <button
        className="scene-toggle"
        aria-expanded={open}
        aria-controls="scene-panel"
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{SEASON_ICON[season]} {TIME_ICON[time]}</span>
        <span>{SEASON_LABEL[season]} {TIME_LABEL[time].toLowerCase()}</span>
      </button>
    </div>
  );
}
