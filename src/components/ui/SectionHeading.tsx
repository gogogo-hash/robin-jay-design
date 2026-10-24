type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
};

const SectionHeading = ({ title, subtitle, className = "" }: Props) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col justify-between h-30 mb-10">
        {" "}
        <h2 className="font-display text-heading uppercase leading-none text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}{" "}
      </div>
    </div>
  );
};

export default SectionHeading;
