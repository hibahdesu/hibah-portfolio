"use client";
import { useState } from "react";
import { experience, moreExperience } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState(false);
  const jobs = open ? [...experience, ...moreExperience] : experience;

  return (
    <section className="section" id="experience">
      <div className="panel">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline" id="experience-list">
          {jobs.map((job, i) => (
            <li
              key={job.role + job.org}
              className={`${job.current ? "current" : ""} ${i >= experience.length ? "revealed" : ""}`}
              style={i >= experience.length ? { animationDelay: `${(i - experience.length) * 70}ms` } : undefined}
            >
              <p className="tl-dates">{job.dates}</p>
              <div className="tl-body">
                <h3>{job.role}</h3>
                <p className="tl-org">{job.org}</p>
                <ul>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          className="btn btn-ghost more-btn"
          aria-expanded={open}
          aria-controls="experience-list"
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less" : `Show ${moreExperience.length} more roles`}
        </button>
      </div>
    </section>
  );
}
