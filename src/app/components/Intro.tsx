import { Image } from "@nextui-org/react";
import TypingEffect from "./TypingEffect";

export const Intro = () => {
  return (
    <div className="grid md:grid-cols-3 items-center gap-10 max-w-[1100px] mx-auto my-10 md:my-40 p-2">
      <div className="col-span-1 w-48 md:w-full grid mx-auto">
        <Image
          isBlurred
          alt="Chris O'Brien - fullstack developer"
          src="chrisobrienImage.jpg"
          radius={"full"}
        />
      </div>
      <div className="md:col-span-2 flex flex-col px-4">
        <h4 className="text-3xl font-semibold">I&apos;m Chris O&apos;Brien </h4>
        <h3 className="text-5xl font-bold">
          I am{" "}
          <TypingEffect
            words={[
              "developer",
              "scrum master",
              "collaborator",
              "teacher",
              "innovator",
              "problem solver",
              "swimmer",
              "golf nerd",
            ]}
            speed={150}
          />
        </h3>
        <p className="mt-4">
          Full stack TypeScript developer. I have over a decade of experience in
          problem-solving, analytical-thinking, communication and leadership
          which I combine with my passion for coding, to turn static designs
          into user-focused dynamic applications.
        </p>
      </div>
    </div>
  );
};
