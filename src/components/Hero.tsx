import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/profile";
import { socialData } from "../data/social";
import { ArrowDown, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [revealedStep, setRevealedStep] = useState(0);
  const fullText = profileData.greeting;
  const socialLinks = socialData.links.filter(({ platform }) =>
    ["GitHub", "LinkedIn", "Instagram"].includes(platform)
  );

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;

      if (i >= fullText.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setRevealedStep(1), 180);
      }
    }, 60);

    return () => window.clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    if (revealedStep < 1) return;

    const timer = window.setTimeout(() => setRevealedStep(2), 220);
    return () => window.clearTimeout(timer);
  }, [revealedStep]);

  useEffect(() => {
    if (revealedStep < 2) return;

    const timer = window.setTimeout(() => setRevealedStep(3), 220);
    return () => window.clearTimeout(timer);
  }, [revealedStep]);

  useEffect(() => {
    if (revealedStep < 3) return;

    const timer = window.setTimeout(() => setRevealedStep(4), 220);
    return () => window.clearTimeout(timer);
  }, [revealedStep]);

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
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: revealedStep >= 2 ? 1 : 0, y: revealedStep >= 2 ? 0 : 14 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-foreground">{profileData.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: revealedStep >= 3 ? 1 : 0, y: revealedStep >= 3 ? 0 : 12 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm md:text-base text-muted-foreground tracking-wide uppercase font-medium mb-6"
          >
            {profileData.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: revealedStep >= 4 ? 1 : 0, y: revealedStep >= 4 ? 0 : 16 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            {profileData.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: revealedStep >= 4 ? 1 : 0, y: revealedStep >= 4 ? 0 : 14 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-8 lg:items-start"
          >
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://raw.githubusercontent.com/daya1an/profile/main/assets/Dayalan%20D%20S%20Resume.pdf"
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

            <div className="flex items-center gap-6">
              {socialLinks.map(({ platform, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                >
                  {platform === "GitHub" ? (
                    <Github size={18} />
                  ) : platform === "LinkedIn" ? (
                    <Linkedin size={18} />
                  ) : (
                    <Instagram size={18} />
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: revealedStep >= 4 ? 1 : 0, scale: revealedStep >= 4 ? 1 : 0.95 }}
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
        animate={{ opacity: revealedStep >= 4 ? 1 : 0 }}
        transition={{ delay: 0.2 }}
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
