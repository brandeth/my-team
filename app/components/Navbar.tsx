import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  className?: string;
};

const navLinks = [
  { href: "/", label: "home" },
  { href: "#about", label: "about" },
];

export default function Navbar({ className }: NavbarProps) {
  const classes = ["bg-teal-900 text-neutral-0 lg:pt-5 lg:-mb-35.25", className]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="mx-auto grid max-w-277.5 items-center gap-6 px-6 py-6 sm:px-10 sm:py-8 lg:min-h-30.25 lg:grid-cols-[auto_1fr_auto] lg:gap-28 lg:px-0 lg:py-0">
        <Link
          href="/"
          aria-label="myteam home"
          className="inline-flex justify-self-start items-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
        >
          <Image
            src="/my-team-logo.svg"
            alt=""
            width={111}
            height={28}
            className="h-auto w-28 sm:w-31"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="justify-self-start">
          <ul className="flex items-center justify-start gap-6 sm:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-preset-6-semibold lowercase text-neutral-0 transition-colors duration-200 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="justify-self-start lg:justify-self-end">
          <Link
            href="#contact"
            className="text-preset-7-semibold inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-0 bg-transparent px-7 py-2.5 text-center lowercase text-neutral-0 transition-colors duration-200 hover:bg-neutral-0 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0 sm:px-8"
          >
            contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
