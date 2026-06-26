import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/profile";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = profileData.greeting;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <div className="relative max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-muted-foreground text-sm mb-6 tracking-wide font-medium">
            {displayText}
            <span className="animate-pulse ml-0.5">|</span>
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            <span className="text-foreground">{profileData.name}</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground tracking-wide uppercase font-medium mb-6">
            {profileData.role}
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            {profileData.tagline}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="https://raw.githubusercontent.com/daya1an/portfolio/main/assets/Dayalan%20D%20S%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground rounded-md hover:bg-muted transition-colors duration-200"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
        >
          {/* Animated glow/ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-foreground/20 via-transparent to-foreground/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main image container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            {profileData.avatarUrl ? (
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-5xl md:text-6xl font-bold text-foreground">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <span className="text-xs mb-2 font-medium">Scroll</span>
          <ArrowDown size={14} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
