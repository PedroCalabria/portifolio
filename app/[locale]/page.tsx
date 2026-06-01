import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import ContactMe from "@/components/sections/ContactMe";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <ContactMe />
    </main>
  );
}
