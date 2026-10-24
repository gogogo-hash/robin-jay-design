import type { ReactNode } from "react";

const sizes = {
  narrow: "max-w-[880px]", // main content
  wide: "max-w-7xl py-5 lg:px-24", // header / footer / price
} as const;

export function Container({
  size = "narrow",
  className = "",
  children,
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className={`mx-auto ${sizes[size]} ${className}`}>{children}</div>
    </div>
  );
}
