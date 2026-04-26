import { ScrollMarker } from "./scroll-marker";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <ScrollMarker />
      <p className="type-label-medium mt-6 uppercase tracking-[0.28em] text-brand-1">
        {eyebrow}
      </p>
      <h2 className="type-h2 mt-5 text-white">{title}</h2>
      <p className="type-article mt-5 text-white/70">{description}</p>
    </div>
  );
}
