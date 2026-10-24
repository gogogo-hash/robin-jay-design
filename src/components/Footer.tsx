type FooterLink = { label: string; url: string };

type Props = {
  copyright: string;
  links?: FooterLink[];
};

const Footer = ({ copyright, links = [] }: Props) => {
  return (
    <footer className="flex min-h-20 flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
      <p className="text-muted-foreground font-sans text-xs">{copyright}</p>

      {links.length > 0 && (
        <nav aria-label="Social links">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-xs transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </footer>
  );
};

export default Footer;
