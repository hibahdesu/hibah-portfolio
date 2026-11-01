import { SceneProvider } from "@/components/SceneProvider";
import Sky from "@/components/Sky";
import SeasonCanvas from "@/components/SeasonCanvas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import SceneControls from "@/components/SceneControls";
import PawPrints from "@/components/PawPrints";

export default function Home() {
  return (
    <SceneProvider>
      <Sky />
      <SeasonCanvas />
      <PawPrints />
      <a className="skip" href="#systems">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Systems />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <SceneControls />
    </SceneProvider>
  );
}
