import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // Accepts any React component or elements as children
  className?: string; // Optional className prop
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-lg ${className}`}>
      {children} {/* This renders the passed content inside the Card */}
    </div>
  );
};

export default Card;
