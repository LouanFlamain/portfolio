import { EvervaultCard } from "@components/features/home_section/imageProfile";
import { HoverButton } from "@components/share/hoverButton";
import { FlipWords } from "../../ui/flip-words";

export const MainSection = () => {
  const words = ["fullstack", "frontend", "backend"];
  return (
    <div className="flex flex-col items-center gap-12 mb-28 py-12">
      <div className="flex flex-col items-center">
        <h1>Louan Flamain</h1>
        <h2>
          Développeur <FlipWords words={words} />
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <EvervaultCard className="max-w-[380px] max-h-[380px] mb-8" />
        <p>Bienvenue sur mon Portofolio ! </p>
      </div>
      <HoverButton>Voir mon CV</HoverButton>
    </div>
  );
};
