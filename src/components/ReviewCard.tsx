type Props = { id: string; name: string; role: string; message: string };

const ReviewCard = ({ id, name, role, message }: Props) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col justify-between h-69 p-8 break-inside-avoid border border-dotted border-muted-foreground"
      >
        <p className="text-sm">"{message}"</p>
        <div>
          <p className="w-fit text-sm border-b border-primary text-primary">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
