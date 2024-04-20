import { Sparkle } from "lucide-react";
import { projects } from "./projects-data";
import Link from "next/link";
import Image from "next-image-export-optimizer";

export default function Projects() {
  return (
    <section id="projects-section" className="px-4 pt-12 md:px-8 lg:px-16">
      <h1 className="text-5xl text-center">Projects</h1>
      <div className="divider w-1/2 mx-auto divider-neutral my-4 opacity-50">
        <Sparkle size={48} />
      </div>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <li key={project.title}>
            <div className="card card-compact w-full bg-base-200 shadow-xl">
              <figure className="h-96 block brightness-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="leading-relaxed opacity-50">
                  {project.description}
                </p>
                <div className="card-actions justify-end items-center flex-nowrap">
                  <div className="flex flex-wrap gap-2 justify-self-start place-self-center mr-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-default badge-outline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    target="_blank"
                    href={project.link}
                    className="btn btn-neutral shrink-0"
                  >
                    See Now
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
