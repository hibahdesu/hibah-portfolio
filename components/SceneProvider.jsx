"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { seasonFor, timeFor } from "@/lib/scene";

const SceneContext = createContext(null);

export function SceneProvider({ children }) {
  const [scene, setScene] = useState({ season: "fall", time: "night", auto: true, ready: false });

  // Read the real clock once mounted, then keep it fresh every minute.
  useEffect(() => {
    const sync = () =>
      setScene((s) => (s.auto ? { ...s, season: seasonFor(), time: timeFor(), ready: true } : s));
    sync();
    const id = setInterval(sync, 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!scene.ready) return;
    const el = document.documentElement;
    el.dataset.season = scene.season;
    el.dataset.time = scene.time;
  }, [scene]);

  const preview = useCallback((patch) => setScene((s) => ({ ...s, ...patch, auto: false })), []);
  const resetAuto = useCallback(
    () => setScene((s) => ({ ...s, season: seasonFor(), time: timeFor(), auto: true })),
    []
  );

  return (
    <SceneContext.Provider value={{ ...scene, preview, resetAuto }}>{children}</SceneContext.Provider>
  );
}

export function useScene() {
  return useContext(SceneContext);
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
