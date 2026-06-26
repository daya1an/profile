import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { skillsData, getIconUrl } from "../data/skills";

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [revealAll, setRevealAll] = useState(false);

  const handleSkillClick = (skillId: string) => {
    setActiveSkills((prev) => (prev.includes(skillId) ? prev : [...prev, skillId]));
  };

  const toggleRevealAll = () => {
    setRevealAll((prev) => !prev);
  };

  return (
    <SectionContainer
      id="skills"
      title="Technical Skills"
      subtitle="Technologies & tools I work with. (Touch/Hover for details)"
      headerAction={
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={toggleRevealAll}
          className={`rounded-lg border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
            revealAll
              ? "border-foreground bg-foreground text-background shadow-sm"
              : "border-foreground/40 bg-transparent text-foreground hover:border-foreground hover:bg-foreground/5"
          }`}
        >
          {revealAll ? "Switch it Off" : "Reveal All"}
        </motion.button>
      }
    >
      <div className="space-y-10">
        {skillsData.categories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 16 }}  
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              className="text-xs tracking-widest uppercase mb-5 cursor-default transition-colors duration-300 font-semibold flex items-center gap-3"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span className={`transition-colors duration-300 ${
                revealAll || hoveredCategory === category.name ? "text-foreground" : "text-muted-foreground"
              }`}>
                {category.name}
              </span>
              <span className="flex-1 h-px bg-border" />
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
              {category.skills.map((skill) => {
                const skillId = `${category.name}-${skill.name}`;
                const iconUrl = getIconUrl(skill);
                const isHovered = hoveredSkill === skillId;
                const isCategoryHovered = hoveredCategory === category.name;
                const isActive = activeSkills.includes(skillId);
                const showLabel = revealAll || isHovered || isCategoryHovered || isActive;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2"
                    onMouseEnter={() => setHoveredSkill(skillId)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => handleSkillClick(skillId)}
                  >
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        showLabel
                          ? "border-foreground/20 bg-muted scale-105"
                          : "border-border bg-card hover:border-foreground/10 hover:bg-muted/50"
                      }`}
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={skill.name}
                          className={`w-7 h-7 md:w-8 md:h-8 transition-all duration-300 ${
                            showLabel ? "opacity-100 grayscale-0" : "opacity-60 grayscale"
                          }`}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : null}
                      <span className={`text-xs font-semibold text-muted-foreground ${iconUrl ? "hidden" : ""}`}>
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] text-center transition-all duration-300 font-medium ${
                        showLabel ? "opacity-100 text-foreground" : "opacity-0 text-muted-foreground"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
