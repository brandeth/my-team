import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "secondaryOnDark";

type ButtonAsButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: undefined;
};

type ButtonAsLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
};

export type ButtonProps =
  | ({ variant?: ButtonVariant } & ButtonAsButtonProps)
  | ({ variant?: ButtonVariant } & ButtonAsLinkProps);

const baseClasses =
  "text-preset-6-semibold inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-[32px] py-[8px] text-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-neutral-0 bg-transparent text-neutral-0 hover:bg-neutral-0 hover:text-teal-950 focus-visible:outline-neutral-0",
  secondary:
    "border-teal-900 bg-transparent text-teal-900 hover:bg-teal-900 hover:text-neutral-0 focus-visible:outline-teal-900",
  secondaryOnDark:
    "border-neutral-0 bg-transparent text-neutral-0 hover:bg-neutral-0 hover:text-teal-900 focus-visible:outline-neutral-0",
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    return <Link className={classes} {...props} />;
  }

  const { type, ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button type={type ?? "button"} className={classes} {...buttonProps} />
  );
}
