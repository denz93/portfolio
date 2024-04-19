import About from "./landing-page-sections/about";
import Hero from "./landing-page-sections/hero";
import Projects from "./landing-page-sections/projects";
import Skills from "./landing-page-sections/skills";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
