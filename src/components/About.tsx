import SectionHeading from "./ui/SectionHeading";
import type { Paragraph } from "../data/site";
type Props = {
  title: string;
  sectionId: string;
  paragraphs: Paragraph[];
  photo?: string;
  photoAlt?: string;
};

const About = ({ title, sectionId, paragraphs, photo, photoAlt }: Props) => {
  return (
    <section id={sectionId} className="about mb-44">
      <div className="flex flex-col gap-8.5 md:flex-row">
        <div className="mt-28 md:w-1/2">
          <div className="relative mx-auto aspect-square w-full max-w-102 overflow-hidden">
            <img
              className="absolute max-w-none"
              style={{ width: "160%", left: "-21%", top: "-7%" }}
              src={photo}
              alt={photoAlt}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex min-h-25 flex-col">
            <h2 className="font-display text-heading uppercase leading-none text-primary">
              {title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {paragraphs.map((p) => (
              <p key={p.id} className="text-foreground font-sans">
                {p.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
