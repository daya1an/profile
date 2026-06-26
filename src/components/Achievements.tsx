import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { achievementsData } from "../data/achievements";
import { Trophy, Medal, Star, Award, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  certificate: BookOpen,
  award: Award,
};

const Achievements: React.FC = () => {
  return (
    <SectionContainer id="achievements" title="Achievements" subtitle="Certifications and recognitions.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievementsData.map((ach, i) => {
          const Icon = iconMap[ach.icon];
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border border-border rounded-lg p-5 flex items-start gap-4 hover:bg-muted/30 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0">
                <Icon size={16} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{ach.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{ach.description}</p>
                <span className="text-[10px] text-muted-foreground font-medium">{ach.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Achievements;
