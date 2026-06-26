import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from "../data/navigation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navigationData.links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8 h-14">
        <a href="#hero" className="font-semibold text-sm tracking-tight text-foreground">
          {navigationData.brand}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navigationData.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-3 right-3 h-px bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navigationData.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
