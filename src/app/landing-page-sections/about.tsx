import {
  BugPlay,
  LandPlot,
  Luggage,
  MapPin,
  Pizza,
  Sparkle,
  TreeDeciduous,
} from "lucide-react";
import data from "./journeys.json";
import MyFace from "./assets/nbach-face.png";
import Image from "next/image";
export default function About() {
  return (
    <section
      id="about-section"
      className="pt-12 min-h-svh px-4 md:px-8 lg:px-16"
    >
      <h1 className="text-5xl text-center">About Me</h1>
      <div className="divider w-1/2 mx-auto divider-neutral my-4 opacity-50">
        <Sparkle size={48} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div className="md:row-start-1 md:col-start-3 md:mx-0 flex flex-wrap gap-2 mx-auto items-center justify-center ">
          <div className="relative w-72 aspect-square rounded-full overflow-hidden">
            <div className="relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[242px] w-[242px] aspect-square rounded-full  bg-gradient-to-b from-amber-600/30 via-neutral-600/30 to-transparent mix-blend-overlay">
              <Image
                src={MyFace.src}
                alt="Nhan Bach"
                width={242}
                height={242}
                className="object-contain opacity-100 w-[242px] h-[242px] rounded-full -top-[20px]  relative "
              />
            </div>
          </div>
          <div className="text-sm flex flex-col justify-end">
            <h3 className="text-xl font-extrabold">Nhan Bach</h3>
            <p className="font-extralight opacity-40">Web Developer</p>
            <p className="flex gap-2 items-center">
              <MapPin /> <span className="">San Francisco, CA</span>
            </p>
          </div>
        </div>
        <div className="row-span-1 col-start-1 col-span-1 md:col-span-2 text-lg ">
          <h2 className="text-4xl my-4">Summary</h2>
          <p className="text-justify font-extralight leading-relaxed">
            Originally a software engineer graduate from Vietnam in 2015, my
            path to the US was unexpectedly diverted by the language barrier,
            leading me to take on various jobs, including driving for Amazon
            Flex. Amidst this, I noticed a common challenge faced by drivers -
            securing shifts amidst fierce competition. Drawing on my technical
            expertise, I developed Zero Flex, a scheduling bot, which not only
            streamlined my own scheduling but also gained traction among fellow
            drivers, attracting up to 600 subscriptions monthly.
          </p>
          <p className="text-justify font-extralight">
            Now on the brink of completing the Springboard online bootcamp,
            I&apos;m poised to re-enter the software engineering field with
            enhanced skills and a steadfast commitment to leveraging technology
            for practical solutions.
          </p>
        </div>
        <div className="md:col-span-2 md:row-start-2">
          <h2 className="text-4xl my-4">Interests</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="badge badge-neutral badge-lg items-center gap-1">
              <LandPlot /> Soccer
            </span>
            <span className="badge badge-neutral badge-lg items-center gap-1">
              <Pizza /> Food Tasting
            </span>
            <span className="badge badge-neutral badge-lg items-center gap-1">
              <TreeDeciduous /> <span>Planting</span>
            </span>
            <span className="badge badge-neutral badge-lg items-center gap-1 shrink-0">
              <BugPlay /> <span className="shrink-0">Reverse Engineering</span>
            </span>
          </div>
        </div>
        <div className="md:col-span-3 mt-8 ">
          <h2 className="mb-4">My Journey</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical xl:max-w-[860px] mx-auto">
            {data.journeys.map((j, idx) => (
              <li key={j.title}>
                <div className="timeline-middle">
                  {idx === 0 && (
                    <div className="absolute w-[20px] h-[20px] outline-1 outline  rounded-full animate-ping"></div>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={
                    " mb-10 font-extralight " +
                    (idx % 2 === 0
                      ? "timeline-start md:text-end"
                      : "timeline-end")
                  }
                >
                  <time className="font-mono italic">{j.period}</time>
                  <div className="text-lg font-black">{j.title}</div>
                  <div className="leading-relaxed opacity-70">
                    {j.description}
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
