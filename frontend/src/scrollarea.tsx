import React, { ReactNode } from "react";

declare module './scrollarea' {
    interface ScrollAreaProps {
      children: ReactNode;
      className?: string;
      height?: string;
      width?: string;
    }
  
    export const ScrollArea: React.FC<ScrollAreaProps>;
  }
  