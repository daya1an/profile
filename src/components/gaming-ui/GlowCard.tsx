import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "green" | "purple";
  hover?: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  hover = true,
}) => {
  const glowMap = {
    blue: "hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.15)] hover:border-neon-blue/50",
    green: "hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.15)] hover:border-neon-green/50",
    purple: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.15)] hover:border-neon-purple/50",
  };

  return (
    <div
      className={`relative border border-border bg-card rounded-lg p-6 transition-all duration-300 ${
        hover ? glowMap[glowColor] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowCard;
