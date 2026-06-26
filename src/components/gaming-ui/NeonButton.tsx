import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  children: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  variant = "primary",
  size = "md",
  glow = true,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "relative font-display font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    secondary:
      "bg-secondary/10 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
    outline:
      "bg-transparent border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary",
  };

  const glowClass = glow
    ? variant === "primary"
      ? "hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]"
      : variant === "secondary"
      ? "hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.4)]"
      : ""
    : "";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
