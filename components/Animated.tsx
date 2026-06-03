"use client";

import { ReactNode } from "react";

export default function Animated({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: `all 600ms ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
