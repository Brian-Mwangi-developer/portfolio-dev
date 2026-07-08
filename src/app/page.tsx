import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";

import mixpanel from "mixpanel-browser";

// Create an instance of the Mixpanel object, your token is already added to this snippet
mixpanel.init("29042c2256fe41de87ae7090222a4149", {
  autocapture: true,
  record_sessions_percent: 100,
});

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
