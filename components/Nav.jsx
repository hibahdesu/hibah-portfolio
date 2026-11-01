"use client";
import { useState } from "react";
import { CatMark } from "./RoboCat";

const LINKS = [
  ["#systems", "Agent systems"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#certifications", "Certifications"],
  ["#contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="nav-brand" aria-label="Hibah Sindi, back to top">
        <CatMark size={30} />
        <span>hibah</span>
      </a>
      <button className="nav-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="nav-links" className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
