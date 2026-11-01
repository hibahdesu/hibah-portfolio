"use client";
import { useEffect, useState } from "react";

// Fixed backdrop: four gradient layers that cross-fade, a sun that becomes a moon,
// stars for the evening, and slow clouds for the day.
export default function Sky() {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 70,
        size: Math.random() < 0.85 ? 1 + Math.random() * 1.5 : 2.5,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-layer sky-dawn" />
      <div className="sky-layer sky-day" />
      <div className="sky-layer sky-dusk" />
      <div className="sky-layer sky-night" />
      <div className="stars">
        {stars.map((s) => (
          <span
            key={s.id}
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>
      <div className="orb">
        <div className="orb-sun" />
        <div className="orb-moon">
          <i /><i /><i />
        </div>
      </div>
      <div className="clouds">
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
      </div>
    </div>
  );
}
