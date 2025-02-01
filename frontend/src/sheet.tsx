import React from "react";

// Sheet Component
interface SheetProps {
  children: React.ReactNode;
  className?: string;
}

const Sheet = ({ children, className }: SheetProps) => {
  return <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>;
};

// SheetContent Component
interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
}

const SheetContent = ({ children, className }: SheetContentProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// SheetDescription Component
interface SheetDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SheetDescription = ({ children, className }: SheetDescriptionProps) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

// SheetHeader Component
interface SheetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SheetHeader = ({ children, className }: SheetHeaderProps) => {
  return <div className={`pb-2 border-b ${className}`}>{children}</div>;
};

// SheetTitle Component
interface SheetTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SheetTitle = ({ children, className }: SheetTitleProps) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

// SheetTrigger Component
interface SheetTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SheetTrigger = ({ children, className, onClick }: SheetTriggerProps) => {
  return (
    <button
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Exporting all components
export { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger };
