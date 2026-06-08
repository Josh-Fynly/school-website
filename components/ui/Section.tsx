import { design } from "@/lib/design";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${design.section.paddingY} ${className}`}>
      {children}
    </section>
  );
}
