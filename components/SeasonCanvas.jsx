"use client";
import { useEffect, useRef } from "react";
import { useScene, useReducedMotion } from "./SceneProvider";

const COLORS = {
  fall: ["#E8902A", "#D9541E", "#F2C14E", "#A8461C", "#C97A2B", "#B83A1B"],
  spring: ["#F07AAE", "#F59AC0", "#E8619A", "#FBB8D3", "#D94F8C"],
  winter: ["#FFFFFF", "#F2F8FF", "#DCEBFA"],
  summer: ["#FFF3B0", "#FFE27A", "#FFFFFF"],
};
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const rand = (a, b) => a + Math.random() * (b - a);

function spawn(w, h, season, time, initial) {
  const p = {
    x: rand(0, w), y: initial ? rand(0, h) : -24, vx: 0, vy: 0,
    rot: rand(0, Math.PI * 2), vr: rand(-0.03, 0.03),
    flip: rand(0, Math.PI * 2), vflip: rand(0.02, 0.06),
    sway: rand(0, Math.PI * 2), swaySpeed: rand(0.008, 0.02),
    color: pick(COLORS[season]), alpha: rand(0.65, 1), phase: rand(0, Math.PI * 2),
    kind: season, size: 4,
  };
  if (season === "fall") { p.size = rand(8, 17); p.vy = rand(0.6, 1.4); }
  if (season === "spring") { p.size = rand(5, 9); p.vy = rand(0.5, 1.1); }
  if (season === "winter") {
    p.fancy = Math.random() < 0.15;
    p.size = p.fancy ? rand(5, 9) : rand(1.5, 3.8);
    p.vy = rand(0.4, 1.3);
  }
  if (season === "summer") {
    if (time === "night" || time === "dusk") {
      p.kind = "firefly"; p.y = rand(h * 0.2, h); p.size = rand(1.5, 3);
      p.vx = rand(-0.3, 0.3); p.vy = rand(-0.3, 0.3); p.color = "#E9FF8A";
    } else {
      p.kind = "seed"; p.y = initial ? rand(0, h) : h + 24; p.size = rand(4, 7); p.vy = -rand(0.2, 0.6);
    }
  }
  return p;
}

function drawLeaf(ctx, p) {
  const s = p.size;
  ctx.scale(Math.cos(p.flip), 1);
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.9, -s * 0.6, s * 0.7, s * 0.4, 0, s);
  ctx.bezierCurveTo(-s * 0.7, s * 0.4, -s * 0.9, -s * 0.6, 0, -s);
  ctx.fill();
  ctx.strokeStyle = "rgba(80,30,10,.45)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.8);
  ctx.lineTo(0, s * 1.3);
  ctx.stroke();
}

function drawPetal(ctx, p) {
  const s = p.size;
  ctx.scale(Math.cos(p.flip), 1);
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.bezierCurveTo(s, s * 0.4, s * 0.8, -s * 0.8, s * 0.2, -s);
  ctx.lineTo(0, -s * 0.7);
  ctx.lineTo(-s * 0.2, -s);
  ctx.bezierCurveTo(-s * 0.8, -s * 0.8, -s, s * 0.4, 0, s);
  ctx.fill();
}

function drawFlake(ctx, p) {
  ctx.fillStyle = p.color;
  if (!p.fancy) {
    ctx.beginPath();
    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  ctx.strokeStyle = p.color;
  ctx.lineWidth = 1.2;
  ctx.lineCap = "round";
  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(0, -p.size);
    ctx.moveTo(0, -p.size * 0.55); ctx.lineTo(p.size * 0.3, -p.size * 0.8);
    ctx.moveTo(0, -p.size * 0.55); ctx.lineTo(-p.size * 0.3, -p.size * 0.8);
    ctx.stroke();
  }
}

function drawSeed(ctx, p) {
  ctx.strokeStyle = "rgba(255,255,255,.85)";
  ctx.lineWidth = 0.8;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * p.size, Math.sin(a) * p.size);
    ctx.stroke();
  }
  ctx.fillStyle = "#F7E27A";
  ctx.beginPath();
  ctx.arc(0, 0, 1.4, 0, Math.PI * 2);
  ctx.fill();
}

function drawFirefly(ctx, p) {
  const glow = 0.25 + 0.75 * Math.abs(Math.sin(p.phase));
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 6);
  g.addColorStop(0, `rgba(233,255,138,${0.9 * glow})`);
  g.addColorStop(1, "rgba(233,255,138,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, p.size * 6, 0, Math.PI * 2);
  ctx.fill();
}

export default function SeasonCanvas() {
  const ref = useRef(null);
  const { season, time, ready } = useScene();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ready || reduced) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, raf = 0, particles = [];
    const light = time === "day" || time === "dawn";
    const mouse = { x: -999, y: -999 };

    const count = () => {
      if (season === "winter") return Math.min(120, Math.round(w / 12));
      if (season === "summer") return Math.min(45, Math.round(w / 32));
      return Math.min(55, Math.round(w / 26));
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count() }, () => spawn(w, h, season, time, true));
    };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -999; mouse.y = -999; };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.sway += p.swaySpeed; p.rot += p.vr; p.flip += p.vflip; p.phase += 0.035;
        if (p.kind === "firefly") {
          p.vx = Math.max(-0.6, Math.min(0.6, p.vx + rand(-0.04, 0.04)));
          p.vy = Math.max(-0.6, Math.min(0.6, p.vy + rand(-0.04, 0.04)));
          p.x += p.vx; p.y += p.vy;
        } else {
          p.x += Math.sin(p.sway) * (p.kind === "winter" ? 0.4 : 0.9) + 0.15 + p.vx;
          p.y += p.vy;
          p.vx *= 0.95;
        }
        // Gently push particles away from the cursor.
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110) {
          const d = Math.sqrt(d2) || 1, f = (110 - d) / 110;
          p.vx += (dx / d) * f * 1.6;
          p.x += (dx / d) * f * 2; p.y += (dy / d) * f * 2;
        }
        const out = p.y > h + 30 || p.y < -40 || p.x < -40 || p.x > w + 40;
        if (out) { particles[i] = spawn(w, h, season, time, p.kind === "firefly"); continue; }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = p.alpha;
        if (p.kind !== "firefly" && p.kind !== "winter") ctx.rotate(p.rot);
        if (p.kind === "winter" && light) { ctx.shadowColor = "rgba(40,80,140,.45)"; ctx.shadowBlur = 3; }
        if (p.kind === "fall") drawLeaf(ctx, p);
        else if (p.kind === "spring") drawPetal(ctx, p);
        else if (p.kind === "winter") drawFlake(ctx, p);
        else if (p.kind === "seed") drawSeed(ctx, p);
        else drawFirefly(ctx, p);
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      ctx.clearRect(0, 0, w, h);
    };
  }, [season, time, ready, reduced]);

  return <canvas ref={ref} className="season-canvas" aria-hidden="true" />;
}
