import SectionHeading from "./ui/SectionHeading";
import WorkCard from "./WorkCard";
import { useState } from "react";
import type { Work as WorkItem, WorkFilter } from "../data/site";

type Props = {
  items: WorkItem[];
  title: string;
  subtitle: string;
  sectionId: string;
  filters: readonly WorkFilter[];
};

const Work = ({ items, title, subtitle, sectionId, filters }: Props) => {
  const [active, setActive] = useState<WorkFilter>("All");
  const visible =
    active === "All" ? items : items.filter((w) => w.category === active);
  return (
    <section id={sectionId} className="Work mb-44">
      <div className="flex min-h-40 flex-col justify-center">
        <SectionHeading title={title} subtitle={subtitle} className={title} />
      </div>
      <div
        role="group"
        aria-label="Filter works"
        className="flex flex-wrap gap-4 pb-10 min-h-25"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={f === active}
            onClick={() => setActive(f)}
            className={
              f === active
                ? "text-primary underline underline-offset-4"
                : "text-muted-foreground hover:text-primary"
            }
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="columns-2 gap-4">
        {visible.map((w) => (
          <WorkCard
            key={w.id}
            id={w.id}
            image={w.image}
            alt={w.alt}
            title={w.title}
            label={w.label}
            category={w.category}
          />
        ))}
      </ul>
    </section>
  );
};

export default Work;
