import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // To accept any content inside the Button
  className?: string; // Optional className for custom styling
  variant?: "outline" | "solid"; // New variant prop for styling options
  onClick?: () => void; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "solid", onClick }) => {
  const baseStyles = "py-2 px-4 rounded-lg border text-white"; // Common styles for all buttons
  const variantStyles = variant === "outline" 
    ? "border-gray-500 text-gray-500 bg-transparent hover:bg-gray-100"
    : "bg-black hover:bg-gray-800"; // Conditional styles based on variant

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
