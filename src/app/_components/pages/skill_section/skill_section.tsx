import { FlipWords } from "../../ui/flip-words";
import { LayoutGrid } from "../../ui/layout-grid";

export const SkillSection = () => {
  const SkeletonBackend = () => {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-1 text-primary">Langages</h3>
          <ul className="flex gap-3">
            <li>PHP</li>
            <li>Javascript (typescript)</li>
            <li>Golang</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-primary">Frameworks</h3>
          <ul className="flex gap-3">
            <li>Symfony</li>
            <li>NodeJS (express)</li>
            <li>Fiber</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-primary">Database</h3>
          <ul className="flex gap-3">
            <li>Mysql/Mariadb/Postgresql</li>
            <li>MongoDb</li>
          </ul>
        </div>
      </div>
    );
  };
  const SkeletonCloud = () => {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-1 text-primary">Technologies</h3>
          <ul className="flex gap-3">
            <li>Docker</li>
            <li>Aws</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-primary">Os</h3>
          <ul className="flex gap-3">
            <li>MacOs (principal)</li>
            <li>Linux (ubuntu Server)</li>
            <li>Windows</li>
          </ul>
        </div>
      </div>
    );
  };
  const SkeletonSoftSkills = () => {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-1 text-primary">Qualités</h3>
          <ul className="flex gap-3">
            <li>Passionné</li>
            <li>Curieux</li>
            <li>Adaptation</li>
          </ul>
        </div>
      </div>
    );
  };
  const SkeletonFrontend = () => {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-1 text-primary">Frameworks</h3>
          <ul className="flex gap-3">
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-primary">Design</h3>
          <ul className="flex gap-3">
            <li>Figma</li>
          </ul>
        </div>
      </div>
    );
  };
  const words = ["soft", "hard"];
  const cards = [
    {
      id: 1,
      content: <SkeletonBackend />,
      className: "md:col-span-2",
      thumbnail: "/img/data-center.webp",
      title: "Backend",
    },
    {
      id: 2,
      content: <SkeletonCloud />,
      className: "md:col-span-1",
      thumbnail: "/img/cloud-computing.webp",
      title: "Cloud",
    },
    {
      id: 3,
      content: <SkeletonSoftSkills />,
      className: "md:col-span-1",
      thumbnail: "/img/soft-skills.webp",
      title: "Soft Skills",
    },
    {
      id: 4,
      content: <SkeletonFrontend />,
      className: "md:col-span-2",
      thumbnail: "/img/webdesigner.webp",
      title: "Frontend",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12 mb-28 py-12 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-center">Compétences</h1>
        <h2>
          <FlipWords words={words} />
          skills
        </h2>
      </div>
      <div className="h-[50rem] w-full dark:bg-dark bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};
