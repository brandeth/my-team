"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
  ];
  const contactHref = "/contact";
  const classes = ["text-neutral-0 lg:pt-8 xl:pt-5", className]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="relative mx-auto w-full px-6 py-5 sm:px-10 sm:py-6 md:grid md:min-h-28 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-6 md:gap-y-0 md:px-10 md:py-8 lg:min-h-38.5 lg:gap-18 lg:px-20 lg:py-0 xl:max-w-277.5 xl:grid-cols-[auto_1fr_auto] xl:gap-20 xl:px-0">
        <div className="flex min-h-14 items-center justify-between md:contents">
          <Link
            href="/"
            aria-label="myteam home"
            className="inline-flex shrink-0 items-center justify-self-start transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
          >
            <Image
              src="/my-team-logo.svg"
              alt=""
              width={111}
              height={28}
              className="h-auto w-36 sm:w-37 md:w-[159.95px]"
              priority
            />
          </Link>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="inline-flex h-11 w-11 items-center justify-center text-neutral-0 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 sm:h-12 sm:w-12 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4.5 w-5.5 sm:h-5 sm:w-6"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M2 2L18 15M18 2L2 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              ) : (
                <path
                  d="M0 1H20M0 8.5H20M0 16H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              )}
            </svg>
          </button>

          <nav
            aria-label="Primary"
            className="hidden min-w-0 justify-self-start md:block md:px-4 lg:justify-self-stretch lg:px-0"
          >
            <ul className="flex items-center justify-start gap-6 sm:gap-8 md:justify-center md:gap-8 lg:justify-start lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-preset-6-semibold lowercase text-neutral-0 transition-colors duration-200 hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-self-start md:block md:justify-self-end md:shrink-0">
            <Button
              href={contactHref}
              className="lowercase whitespace-nowrap md:px-7 lg:px-8"
            >
              <span>contact us</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-primary-navigation"
            aria-label="Mobile primary"
            className="absolute left-0 right-0 top-full z-30 mt-5 rounded-2xl bg-neutral-0 px-6 py-6 text-teal-900 shadow-[0_24px_48px_rgba(1,47,52,0.28)] md:hidden"
          >
            <ul className="flex flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li key={link.label} className="w-full">
                  <Link
                    href={link.href}
                    className="text-preset-6-semibold inline-flex lowercase text-teal-900 transition-colors duration-200 hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-teal-900/12 pt-6">
              <Button
                href={contactHref}
                variant="secondary"
                className="w-full lowercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>contact us</span>
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
