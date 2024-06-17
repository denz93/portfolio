import { ChevronDown, Linkedin, Github } from "lucide-react";
import Image from "next-image-export-optimizer";
import HeroImage from "./assets/hero.png";
import Link from "next/link";

export default function Hero({
  scrollLink = "/#about-section",
}: {
  scrollLink?: string;
}) {
  return (
    <section
      id="hero-section"
      className="hero h-svh bg-base-200 relative overflow-hidden"
    >
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          src={HeroImage.src}
          alt="hero image abstract polygon"
        />
      </div>
      <div className="hero-overlay bg-base-300 bg-opacity-70 z-[1]"></div>
      <div className="hero-content text-center z-[2] rounded-box ">
        <div className="m-auto flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-extrabold">
            Nhan Bach
          </h1>
          <p className="py-6 max-w-screen-sm text-center lg:text-xl 2xl:text-4xl">
            Passionate Web Developer specializing in ReactJS, TypeScript, and
            Python, dedicated to crafting innovative solutions for real-world
            challenges.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              target="_blank"
              className="btn btn-accent"
              href="https://www.linkedin.com/in/nhan-bach-48b20b11a/"
            >
              <Linkedin />
            </Link>
            <Link
              target="_blank"
              className="btn btn-accent"
              href="https://github.com/denz93"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
      <Link
        href={scrollLink}
        className="absolute bottom-4 flex flex-col items-center justify-center z-[2]"
      >
        <ChevronDown className=" btn btn-circle btn-accent animate-pulse" />
      </Link>
      <div className=" absolute w-full h-full  top-0 left-0 pointer-events-none  z-10 mix-blend-overlay blur-2xl ">
        <div
          className="relative w-1/2  h-full linea bg-gradient-to-r from-primary via-accent to-secondary top-0 left-1/3"
          style={{ clipPath: "polygon(91% 0, 100% 7%, 52% 100%, 0 55%)" }}
        ></div>
      </div>
    </section>
  );
}
