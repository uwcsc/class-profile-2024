type SectionWrapperProps = {
  title: string;
};

export function SectionWrapper({ title }: SectionWrapperProps) {
  return (
    <div>
      <h2 className="text-light-blue text-center lg:text-left lg:pl-16">{title}</h2>
    </div>
  );
}
