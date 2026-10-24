import SectionHeading from "./ui/SectionHeading";

type Props = {
  title: string;
  subtitle: string;
  sectionId: string;
  fields?: {
    name: string;
    email: string;
    message: string;
  };
  submitLabel?: string;
  formAction?: string;
};

const Contact = ({
  title,
  subtitle,
  sectionId,
  fields,
  submitLabel,
  formAction,
}: Props) => {
  return (
    <section id={sectionId} className="Contact mb-22">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="flex flex-col w-50 mt-16">
      {fields && (
        <form action={formAction} method="POST" className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-xs text-muted-foreground ">
            {fields.name}
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              className="border-b text-muted-foreground py-2 focus:border-neutral-800 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1 text-xs text-muted-foreground ">
            {fields.email}
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="border-b py-2 text-muted-foreground focus:border-neutral-800 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1 text-xs text-muted-foreground">
            {fields.message}
            <textarea
              name="message"
              rows={4}
              required
              className="border-b  py-2 text-muted-foreground focus:border-neutral-800 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="border py-2 text-muted-foreground focus:border-neutral-800 focus:outline-none"
          >
            {submitLabel || "Send"}
          </button>
        </form>
      )}
      </div>
    </section>
  );
};

export default Contact;
