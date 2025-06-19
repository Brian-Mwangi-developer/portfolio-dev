import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}
