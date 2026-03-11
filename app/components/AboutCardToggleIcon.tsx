import type { ComponentPropsWithoutRef } from "react";

type AboutCardToggleIconProps = ComponentPropsWithoutRef<"svg">;

export default function AboutCardToggleIcon(props: AboutCardToggleIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M10 6H16V10H10V16H6V10H0V6H6V0H10V6Z" fill="#012F34" />
    </svg>
  );
}
