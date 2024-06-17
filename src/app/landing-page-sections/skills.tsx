import { Sparkle } from "lucide-react";
import "react-icons/si";
import { skills } from "./skills-data";
import _ from "lodash";
import React from "react";
import { IconType } from "react-icons/lib";
let icons = {} as { [key: string]: IconType };

new Promise(async (resolve) => {
  let mod: any = await import("react-icons/fa");
  icons = { ...icons, ...mod } as any;
  mod = await import("react-icons/ri");
  icons = { ...icons, ...mod } as any;
  mod = await import("react-icons/tb");
  icons = { ...icons, ...mod } as any;
  mod = await import("react-icons/si");
  icons = { ...icons, ...mod } as any;
});

export default function Skills() {
  const groupedSkills = _.groupBy(skills, (s) => s.category);

  return (
    <section id="skills-section" className="pt-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-center">Skills</h1>
      <div className="divider w-1/2 mx-auto opacity-50">
        <Sparkle size={48} />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-12">
        {_.map(groupedSkills, (skills, category) => (
          <li key={category} className=" text-center">
            <h3 className="capitalize mb-4">{category}</h3>
            <div className="flex gap-2 flex-wrap justify-center">
              {skills.map((skill) => (
                <>
                  <span className="btn btn-neutral">
                    {icons[skill.icon]?.({}) ?? null}
                    {skill.name}
                  </span>
                </>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
