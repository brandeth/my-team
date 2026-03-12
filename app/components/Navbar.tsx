import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type NavbarProps = {
  className?: string;
};

const navLinks = [
  { href: "/", label: "home" },
  { href: "#about", label: "about" },
];

export default function Navbar({ className }: NavbarProps) {
  const classes = ["text-neutral-0 lg:pt-8 xl:pt-5", className]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="mx-auto grid w-full items-center gap-6 px-6 py-6 sm:px-10 sm:py-8 md:min-h-28 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6 md:gap-y-0 md:px-10 md:py-8 lg:min-h-38.5 lg:gap-18 lg:px-20 lg:py-0 xl:max-w-277.5 xl:grid-cols-[auto_1fr_auto] xl:gap-20 xl:px-0">
        <Link
          href="/"
          aria-label="myteam home"
          className="inline-flex shrink-0 justify-self-start items-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
        >
          <Image
            src="/my-team-logo.svg"
            alt=""
            width={111}
            height={28}
            className="h-auto w-[159.95px]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="min-w-0 justify-self-start md:justify-self-stretch md:px-4 lg:px-0"
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

        <div className="justify-self-start md:justify-self-end md:shrink-0">
          <Button
            href="#contact"
            className="lowercase whitespace-nowrap md:px-7 lg:px-8"
          >
            <span>contact us</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
