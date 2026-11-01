"use client";
import { useEffect, useState } from "react";

// A paw print appears wherever you click empty space.
export default function PawPrints() {
  const [paws, setPaws] = useState([]);
  useEffect(() => {
    let id = 0;
    const onClick = (e) => {
      if (e.target.closest("a, button, input, textarea, select")) return;
      const paw = { id: id++, x: e.clientX, y: e.clientY, r: Math.random() * 40 - 20 };
      setPaws((p) => [...p.slice(-8), paw]);
      setTimeout(() => setPaws((p) => p.filter((q) => q.id !== paw.id)), 1200);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="paws" aria-hidden="true">
      {paws.map((p) => (
        <svg key={p.id} className="paw" viewBox="0 0 40 40" style={{ left: p.x, top: p.y, "--r": `${p.r}deg` }}>
          <ellipse cx="20" cy="26" rx="9" ry="8" />
          <circle cx="9" cy="15" r="4" /><circle cx="16" cy="9" r="4" />
          <circle cx="24" cy="9" r="4" /><circle cx="31" cy="15" r="4" />
        </svg>
      ))}
    </div>
  );
}
