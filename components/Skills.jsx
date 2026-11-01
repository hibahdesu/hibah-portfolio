import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="panel">
        <h2 className="section-title">Skills</h2>
        <dl className="skills">
          {skills.map((g) => (
            <div key={g.group} className="skill-row">
              <dt>{g.group}</dt>
              <dd>
                <ul className="chips">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
