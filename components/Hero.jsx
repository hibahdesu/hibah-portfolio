"use client";
import { useEffect, useState } from "react";
import RoboCat from "./RoboCat";
import SocialLinks from "./SocialLinks";
import { useScene, useReducedMotion } from "./SceneProvider";
import { profile } from "@/lib/data";

const GREETING = { dawn: "Good morning, early bird.", day: "Hello there.", dusk: "Good evening.", night: "Hello, night owl." };
const SEASON_LINE = {
  fall: "The leaves are falling.",
  winter: "It's snowing.",
  spring: "Spring is in bloom.",
  summer: "Summer's here.",
};
const SEASON_THING = { fall: "the leaves", winter: "the snow", spring: "the petals", summer: "the light" };

function useTyped(words, reduced) {
  const [w, setW] = useState(0);
  const [len, setLen] = useState(words[0].length);
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (reduced) return;
    const full = words[w].length;
    let delay = del ? 40 : 75;
    if (!del && len === full) delay = 1800;
    if (del && len === 0) delay = 300;
    const t = setTimeout(() => {
      if (!del && len === full) setDel(true);
      else if (del && len === 0) { setDel(false); setW((w + 1) % words.length); }
      else setLen(len + (del ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [w, len, del, reduced, words]);
  return words[w].slice(0, len);
}

export default function Hero() {
  const { season, time } = useScene();
  const reduced = useReducedMotion();
  const role = useTyped(profile.roles, reduced);
  const [touch, setTouch] = useState(false);
  useEffect(() => setTouch(window.matchMedia("(hover: none)").matches), []);

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-greeting">{GREETING[time]} {SEASON_LINE[season]}{" "}
          {reduced ? "" : `${touch ? "Drag your finger" : "Move your cursor"} through ${SEASON_THING[season]}.`}</p>
        <h1 className="hero-name">
          <span>Hibah</span>
          <span>Sindi</span>
        </h1>
        <p className="hero-role" aria-label={profile.roles.join(", ")}>
          <span aria-hidden="true">{role}</span>
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#systems">See what I'm building</a>
          <a className="btn btn-ghost" href={profile.cv} download>Download CV</a>
        </div>
        <SocialLinks className="hero-social" />
      </div>
      <div className="hero-cat">
        <RoboCat size={340} hint="This is Lucy. Click to say hi." />
      </div>
    </section>
  );
}
