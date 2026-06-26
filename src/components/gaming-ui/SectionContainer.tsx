import React from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  headerAction,
}) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14 md:mb-18 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
              )}
            </div>
            {headerAction && <div className="sm:self-start">{headerAction}</div>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
