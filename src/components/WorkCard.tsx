type Props = {
  id: string;
  image: string;
  alt: string;
  title: string;
  label?: string;
  category: string;
};

const WorkCard = ({id, image, alt, title, label, category}: Props) => {
  return <li key={id} className="mb-4 break-inside-avoid">
            <img src={image} alt={alt} className="w-full" />
            <p className="pt-2 text-sm">{title}</p>
            <p className="text-xs text-muted-foreground">
              {label ?? category}
            </p>
          </li>;
};

export default WorkCard;
