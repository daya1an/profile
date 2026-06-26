import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { projectsData } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" title="Personal Projects" subtitle="Personal and side projects.">
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="h-full !p-0 hover:shadow-md transition-shadow duration-300">
              <div className="p-5 md:p-6 flex flex-col h-full">
                {project.featured && (
                  <span className="inline-block w-fit text-[10px] uppercase tracking-widest font-semibold text-muted-foreground border border-border rounded px-2 py-0.5 mb-3">
                    Featured
                  </span>
                )}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Tag key={t} value={t} className="!px-2 !py-0.5" />
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-xs font-medium text-foreground hover:opacity-60 transition-opacity duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
