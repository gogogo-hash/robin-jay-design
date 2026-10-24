type Props = { name: string; nav: { label: string; href: string }[] };

const Header = ({ name, nav }: Props) => {
  return (
    <header className="h-30 flex items-center justify-between fade-border-b">
      <p className="text-primary font-display text-logo">{name}</p>
      <nav>
        <ul className="flex items-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                className="font-sans font-light text-base text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
