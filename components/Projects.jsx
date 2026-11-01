import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="panel">
        <h2 className="section-title">Projects</h2>
        <ul className="projects">
          {projects.map((p, i) => (
            <li key={p.title} className={i === 0 ? "project featured" : "project"}>
              <p className="project-year">{p.year}</p>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {p.links.length > 0 && (
                  <p className="project-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
