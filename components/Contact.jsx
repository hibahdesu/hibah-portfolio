import { profile } from "@/lib/data";
import { CatMark } from "./RoboCat";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const { links } = profile;
  return (
    <section className="section" id="contact">
      <div className="panel contact">
        <CatMark size={72} />
        <h2 className="contact-title">Hiring for AI or data? Let's talk.</h2>
        <p className="section-lead">
          I'm open to AI engineering, ML, and data roles in Riyadh, hybrid, or remote.
        </p>
        <div className="hero-actions center">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn-ghost" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          <a className="btn btn-ghost" href={profile.cv} download>Download CV</a>
        </div>
        <SocialLinks size="lg" className="contact-social" />
        <p className="contact-meta">
          {profile.email}<br />{profile.phone}
        </p>
      </div>
      <footer className="footer">
        <p>Built by Hibah Sindi with Next.js. Lucy is powered by curiosity and cat treats.</p>
      </footer>
    </section>
  );
}
