"use client";

import { ReactNode } from "react";

export default function Animated({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="transition-all duration-300">{children}</div>;
}
