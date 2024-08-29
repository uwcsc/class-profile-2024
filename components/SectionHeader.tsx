import { GooseAndMoon } from "./GooseAndMoon";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <GooseAndMoon />
      <div className="flex flex-col items-center justify-center py-[calc(40rem/16)] text-center">
        <h1
          className="bg-[linear-gradient(281deg,#91f1ac_57.31%,#5caff9_94.83%)] bg-clip-text text-5xl md:text-6xl lg:text-7xl my-3 md:my-[calc(20rem/16)] lg:my-[calc(40rem/16)] break-words"
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {title}
        </h1>
        {subtitle && <h5 className="max-w-[min(90vw,40rem)] text-xl md:text-2xl lg:text-3xl mx-2 md:mx-4 text-lightest-pink">{subtitle}</h5>}
      </div>
    </>
  );
}
