import SectionHeading from "./ui/SectionHeading";

type Props = {
  title: string;
  subtitle: string;
  sectionId: string;
};

const Price = ({ title, subtitle, sectionId }: Props) => {
  return (
    <section id={sectionId} className="Price">
      <SectionHeading title={title} subtitle={subtitle} />
    </section>
  );
};

export default Price;
