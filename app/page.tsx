import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Education } from "@/components/main/Education"; // Ensure this is correctly imported
import { Experience } from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}