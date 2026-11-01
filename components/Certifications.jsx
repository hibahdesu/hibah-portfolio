import { certifications, education, profile } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="panel">
        <h2 className="section-title">Certifications</h2>
        <ul className="badges">
          {certifications.featured.map((c) => (
            <li key={c.name} className="badge">
              <span className="badge-mark" aria-hidden="true">{c.mark}</span>
              <div>
                <strong>{c.name}</strong>
                <span>{c.issuer}, {c.date}</span>
              </div>
            </li>
          ))}
        </ul>
        <ul className="cert-list">
          {certifications.more.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="muted small">
          Credential IDs and verification links are on{" "}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">my LinkedIn</a>.
        </p>

        <h2 className="section-title edu-title">Education</h2>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.title}>
              <strong>{e.title}</strong>
              <span>{e.place}</span>
              <span className="muted">{e.dates}{e.note ? `, ${e.note}` : ""}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
