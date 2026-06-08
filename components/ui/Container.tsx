import { design } from "@/lib/design";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={design.container.width}>{children}</div>;
}
