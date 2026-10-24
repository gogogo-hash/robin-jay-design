type Props = {
  title: string;
  subtitle: string;
  logo: string;
};

const Hero = ({ title, subtitle, logo }: Props) => {
  return (
    <section className="hero flex flex-col justify-center h-104 mb-22">
      <div className="flex flex-col h-50 justify-between">
        <h1 className="font-display text-hero text-primary text-center">
          {title}
        </h1>
        <div>
          {" "}
          <p className="font-sans text-base text-muted-foreground text-center">
            {subtitle}
          </p>
          <img src={logo} alt="Logo" className="w-16.75 h-auto mx-auto block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
