import Image from "next/image";
import { MainSection } from "@components/pages/main_section";
import { SkillSection } from "@components/pages/skill_section";
import { ProjectSection } from "@components/pages/project_section";
import { AboutSection } from "@components/pages/about_section";
import { ContactSection } from "@components/pages/contact_section";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="max-w-[1140px] w-full px-4 xl:px-0 h-screen overflow-y">
        <MainSection />
        <SkillSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
