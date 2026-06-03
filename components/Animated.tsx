"use client";

export default function Animated({ children }: { children: React.ReactNode }) {
  return (
    <div className="transition-all duration-500 opacity-100">
      {children}
    </div>
  );
}
