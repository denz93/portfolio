import { Sparkle } from "lucide-react";
import { skills } from "./skills-data";
import _ from "lodash";

export default function Skills() {
  const groupedSkills = _.groupBy(skills, (s) => s.category);

  return (
    <section id="skills-section" className="pt-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-center">Skills</h1>
      <div className="divider w-1/2 mx-auto opacity-50">
        <Sparkle size={48} />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {_.map(groupedSkills, (skills, category) => (
          <li key={category}>
            <h3 className="capitalize mb-4">{category}</h3>
            <div className="grid grid-cols-[max-content_minmax(0,1fr)] gap-4 items-center">
              {_.map(
                _.sortBy(skills, (s) => -s.confident),
                (skill) => (
                  <>
                    <span className="text-right">{skill.name}</span>
                    <progress
                      value={skill.confident}
                      max={100}
                      className="progress w-3/4 mr-auto relative after:content-[attr(value)_'%'] overflow-visible after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-[120%]"
                    ></progress>
                  </>
                ),
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
