import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

const navLinks = [
  { href: "/", label: "home" },
  { href: "#about", label: "about" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: "/icons/facebook.svg",
    width: 24,
    height: 24,
  },
  {
    href: "https://www.pinterest.com",
    label: "Pinterest",
    icon: "/icons/pinterest.svg",
    width: 24,
    height: 24,
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: "/icons/twitter.png",
    width: 24,
    height: 20,
  },
];

const addressLines = [
  "987 Hillcrest Lane",
  "Irvine, CA",
  "California 92714",
  "Call Us : 949-833-7432",
];

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const classes = ["bg-teal-950 text-neutral-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={classes}>
      <div className="mx-auto grid w-full gap-10 px-6 py-16 text-center sm:px-10 min-[768px]:max-[1025px]:min-h-64 min-[768px]:max-[1025px]:grid-cols-2 min-[768px]:max-[1025px]:grid-rows-[auto_1fr_auto] min-[768px]:max-[1025px]:gap-x-10 min-[768px]:max-[1025px]:gap-y-4 min-[768px]:max-[1025px]:px-10 min-[768px]:max-[1025px]:py-14 min-[1025px]:grid-cols-[minmax(0,1fr)_auto] min-[1025px]:items-start min-[1025px]:gap-10 min-[1025px]:px-10 xl:max-w-277.5 xl:px-0 xl:py-11">
        <div className="grid gap-10 min-[768px]:max-[1025px]:contents min-[1025px]:grid-cols-[auto_auto] min-[1025px]:items-start min-[1025px]:justify-start min-[1025px]:gap-8 min-[1025px]:text-left xl:gap-30">
          <div className="flex h-full flex-col items-center min-[1025px]:justify-center justify-between gap-7 min-[768px]:max-[1024px]:col-start-1 min-[768px]:max-[1024px]:row-start-1 min-[768px]:max-[1024px]:h-auto min-[768px]:max-[1025px]:items-start min-[768px]:max-[1024px]:justify-between min-[768px]:max-[1024px]:text-left min-[1025px]:items-start min-[1025px]:text-left">
            <Link
              href="/"
              aria-label="myteam home"
              className="inline-flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
            >
              <Image
                src="/my-team-logo.svg"
                alt=""
                width={160}
                height={40}
                className="h-auto w-28 sm:w-37 min-[1025px]:w-[225px]"
              />
            </Link>

            <nav aria-label="Footer">
              <ul className="flex items-center justify-center gap-6 sm:gap-8 min-[768px]:max-[1025px]:justify-start min-[1025px]:justify-start">
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
          </div>

          <address className="not-italic text-preset-7-medium-italic opacity-60 text-neutral-0 min-[768px]:max-[1025px]:col-start-2 min-[768px]:max-[1025px]:row-start-1 min-[768px]:max-[1025px]:justify-self-end min-[768px]:max-[1025px]:text-right min-[1025px]:pt-1 min-[1025px]:text-left flex flex-col gap-[3px]">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
        </div>

        <div className="flex flex-col items-center gap-4 min-[768px]:max-[1025px]:contents min-[1025px]:items-end min-[1025px]:justify-between min-[1025px]:self-stretch min-[1025px]:text-right">
          <ul className="flex items-center gap-4 min-[768px]:max-[1025px]:col-start-1 min-[768px]:max-[1025px]:row-start-3 min-[768px]:max-[1025px]:justify-self-start min-[768px]:max-[1025px]:self-end">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-6 w-6 items-center justify-center text-neutral-0 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                >
                  <Image
                    src={link.icon}
                    alt={`${link.label} icon`}
                    aria-hidden="true"
                    width={link.width}
                    height={link.height}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-preset-7-medium-italic not-italic text-neutral-0 opacity-60 min-[768px]:max-[1025px]:col-start-2 min-[768px]:max-[1025px]:row-start-3 min-[768px]:max-[1025px]:justify-self-end min-[768px]:max-[1025px]:self-end min-[768px]:max-[1025px]:text-right">
            Copyright {currentYear}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
