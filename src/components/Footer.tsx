import React from "react";
import { socialData } from "../data/social";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground font-medium">
          {socialData.gamerTag}
        </span>

        <div className="flex items-center gap-4">
          {socialData.links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={link.platform}
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
