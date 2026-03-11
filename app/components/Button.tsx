import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "text-preset-7-semibold inline-flex min-h-14 cursor-pointer items-center justify-center rounded-full border px-8 py-3 text-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-neutral-0 bg-transparent text-neutral-0 hover:bg-neutral-0 hover:text-teal-950 focus-visible:outline-neutral-0",
  secondary:
    "border-teal-900 bg-transparent text-teal-900 hover:bg-teal-900 hover:text-neutral-0 focus-visible:outline-teal-900",
};

export default function Button({
  className,
  type,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <button type={type ?? "button"} className={classes} {...props} />;
}
