"use client";

import Image, { type StaticImageData } from "next/image";
import { type CSSProperties, type ReactElement, useId, useState } from "react";

import AboutCardToggleIcon from "./AboutCardToggleIcon";

type AboutCardImage = StaticImageData | `/${string}`;

type AboutCardProps = {
  image: AboutCardImage;
  name: string;
  role: string;
  linkedin?: string;
  twitter?: string;
  description: string;
};

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h3.96V21H3V8.98Zm7.16 0h3.8v1.64h.06c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.64 4.74 6.08V21h-3.96v-5.65c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21h-3.96V8.98Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.86L6.1 22H3l7.24-8.28L1 2h6.26l4.32 6.22L18.9 2Zm-1.07 18h1.69L6.35 3.9H4.53L17.83 20Z" />
    </svg>
  );
}

export default function AboutCard({
  image,
  name,
  role,
  linkedin,
  twitter,
  description,
}: AboutCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = useId();
  const displayedDescription = description.slice(0, 100);
  const socialLinks = [
    twitter
      ? {
          href: twitter,
          label: `${name} on Twitter`,
          icon: <TwitterIcon />,
        }
      : null,
    linkedin
      ? {
          href: linkedin,
          label: `${name} on LinkedIn`,
          icon: <LinkedInIcon />,
        }
      : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: ReactElement;
  }>;
  const hasSocialLinks = socialLinks.length > 0;
  const cardStyle = {
    "--about-card-width": "min(100%, 350px)",
    "--about-card-total-height": "281px",
    "--about-card-button-size": "56px",
    "--about-card-button-overlap": "calc(var(--about-card-button-size) / 2)",
    "--about-card-panel-height":
      "calc(var(--about-card-total-height) - var(--about-card-button-overlap))",
  } as CSSProperties;

  return (
    <article
      style={cardStyle}
      className="relative isolate flex w-(--about-card-width) flex-col items-center"
    >
      <div
        id={panelId}
        role="region"
        aria-label={`${name} details`}
        className={`relative flex h-(--about-card-panel-height) w-full flex-col items-center overflow-hidden px-12 pb-16 pt-8.75 text-center transition-[background-color] duration-300 ${
          isExpanded ? "bg-teal-950" : "bg-teal-900"
        }`}
      >
        {isExpanded ? (
          <div className="flex h-full w-full flex-col items-center">
            <h3 className="text-preset-6-bold mb-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-cyan-100">
              {name}
            </h3>

            <div className="mt-2 flex min-h-0 w-full flex-1 flex-col items-center">
              <p className="text-preset-7-semibold text-neutral-0">
                {displayedDescription}
              </p>

              {hasSocialLinks ? (
                <div className="mt-4 flex items-center justify-center gap-6 text-neutral-0">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.href}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.label}
                      className="inline-flex items-center justify-center text-current transition-colors duration-200 hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
                    >
                      {socialLink.icon}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center text-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#0a474b]">
              <Image
                src={image}
                alt={name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex max-w-full flex-col items-center">
              <h3 className="text-preset-6-bold max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-cyan-100">
                {name}
              </h3>
              <p className="text-preset-7-medium-italic text-neutral-0">
                {role}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 flex justify-center">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          aria-label={
            isExpanded ? `Collapse ${name} details` : `Expand ${name} details`
          }
          onClick={() => setIsExpanded((current) => !current)}
          className={`-mt-(--about-card-button-overlap) inline-flex h-(--about-card-button-size) w-(--about-card-button-size) cursor-pointer items-center justify-center rounded-full transition-[background-color,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 ${
            isExpanded
              ? "bg-cyan-100 text-teal-900 hover:bg-rose-500 focus-visible:outline-cyan-100"
              : "bg-rose-500 text-teal-900 hover:bg-cyan-100 focus-visible:outline-rose-500"
          }`}
        >
          <AboutCardToggleIcon
            className={`h-4 w-4 transition-transform duration-200 ${
              isExpanded ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </article>
  );
}
