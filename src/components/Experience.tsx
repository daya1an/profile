import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { experienceData } from "../data/experience";
import { Timeline } from "primereact/timeline";
import { Tag } from "primereact/tag";

const Experience: React.FC = () => {
  const customMarker = (item: typeof experienceData[0]) => (
    <div className="w-8 h-8 rounded-full border-2 border-foreground/20 bg-background flex items-center justify-center">
      <span className="text-[10px] font-bold text-foreground">{item.level}</span>
    </div>
  );

  const customContent = (item: typeof experienceData[0], index: number) => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border border-border rounded-lg p-5 md:p-6 mb-6 hover:bg-muted/30 transition-colors duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h3 className="text-sm md:text-base font-semibold text-foreground">
          {item.title}
        </h3>
        <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
      </div>
      <p className="text-xs tracking-wide uppercase text-muted-foreground font-medium mb-3">
        {item.company}
      </p>
      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
      {item.highlights && item.highlights.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {item.highlights.map((h, idx) => (
            <li key={idx} className="text-muted-foreground text-xs leading-relaxed flex gap-2">
              <span className="text-foreground/40 mt-0.5 shrink-0">—</span>
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <Tag key={t} value={t} className="!px-2 !py-0.5" />
        ))}
      </div>
    </motion.div>
  );

  return (
    <SectionContainer id="experience" title="Professional Experience" subtitle="Java Full Stack Engineer - Ford Motor Company (2023 - Present)">
      <div className="hidden md:block">
        <Timeline
          value={experienceData.map((item, index) => ({ ...item, _index: index }))}
          marker={(item) => customMarker(item)}
          content={(item) => customContent(item, item._index)}
          className="[&_.p-timeline-event-opposite]:hidden [&_.p-timeline-event-content]:pl-4"
        />
      </div>
      {/* Mobile fallback without Timeline */}
      <div className="md:hidden space-y-4">
        {experienceData.map((item, index) => (
          <div key={index}>
            {customContent(item, index)}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
