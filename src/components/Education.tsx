import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionContainer from "./gaming-ui/SectionContainer";
import { educationData } from "../data/education";

const Education: React.FC = () => {
  return (
    <SectionContainer id="education" title="Education" subtitle="Academic foundation and key milestones.">
      <div className="space-y-4">
        {educationData.map((item, index) => (
          <motion.div
            key={`${item.degree}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="border border-border rounded-xl p-5 md:p-6 bg-background/70 hover:bg-muted/30 transition-colors duration-300"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/50">
                  <GraduationCap size={18} className="text-foreground" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Sparkles size={12} />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:max-w-[55%]">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                <ul className="mt-3 space-y-2">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 text-foreground/50">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {item.honors.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.honors.map((honor) => (
                      <span
                        key={honor}
                        className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-foreground"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Education;
