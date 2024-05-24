import Link from "next/link";
import { MacbookScroll } from "../../ui/macbook-scroll";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import { Spotlight } from "../../ui/Spotlight";
import { SparklesCore } from "../../ui/sparkles";

export const AboutSection = () => {
  const words = [
    {
      text: "Salut",
    },
    {
      text: "je",
    },
    {
      text: "m'apelle",
    },
    {
      text: "Louan",
    },
    {
      text: "J'ai",
    },
    {
      text: "21",
    },
    {
      text: "ans",
    },
    {
      text: "et",
    },
    {
      text: "je",
    },
    {
      text: "suis",
    },
    {
      text: "passionné",
    },
    {
      text: "par",
    },
    {
      text: "l'informatique",
    },
    {
      text: "!",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12 mb-28 py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-center">Qui suis-je ?</h1>
        <h2 className="text-center">Petit instant blabla</h2>
      </div>
      {/*<TypewriterEffectSmooth className="hidden sm:flex" words={words} />*/}
      <div className="flex flex-col items-center mb-12">
        <h3 className="flex flex-col items-center text-center mb-2">
          Salut je m&apos;apelle Louan J&apos;ai 21 ans et je suis passionné par
          l&apos;informatique !
        </h3>
        <div className="w-full h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-dark [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <p className="text-center max-w-[850px]">
        Je suis actuellement en fin d&apos;étude du Bachelor développeur web à
        Hetic et rentre bientôt dans le Master ingénieurie web et Mobile à
        L&apos;iim. Je souhaiterais dans le futur Devenir lead-développeur,
        alors je m&apos;efforce d&apos;apprendre aussi bien le backend que le
        front end !
      </p>
      <div className="overflow-hidden w-full">
        <MacbookScroll
          title={
            <span>
              Je travaille sur un macbook pro. <br /> Apple c&apos;est le top !
            </span>
          }
          badge={
            <Link href="https://peerlist.io/manuarora">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src={`/img/shell.webp`}
          showGradient={false}
        />
      </div>
    </div>
  );
};
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};
