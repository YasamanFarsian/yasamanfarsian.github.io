import { ScrollAnimation } from "@/components/ScrollAnimation";
import { skills } from "../data/SkillsList";

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text mt-10">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 min-h-80">

              <div className="flex items-center text-left space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-md font-semibold">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => {
                  const isFullWidth =
                    skill.span === 2 || skill.name.length > 28;

                  return (
                    <div
                      key={skill.name}
                      className={`bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group ${isFullWidth ? "col-span-2" : "col-span-1"
                        }`}
                    >
                      {skill.icon && (
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          {skill.icon}
                        </div>
                      )}

                      <span className="text-gray-400 group-hover:text-white transition-colors text-sm text-center leading-snug">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
