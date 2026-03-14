/* eslint-disable @next/next/no-img-element */
import { type ComponentProps } from "react";

import AboutCard from "../../components/AboutCard";
import ContactCta from "../../components/ContactCta";

export default function AboutPage() {
  const directors: Array<ComponentProps<typeof AboutCard>> = [
    {
      name: "Nikita Marks",
      role: "Founder & CEO",
      image: "/images/nikita-marks.png",
      description:
        "Nikita guides long-term partnerships and keeps every team focused on sustainable growth.",
      linkedin: "https://www.linkedin.com/in/nikita-marks",
      twitter: "https://x.com/nikita_marks",
    },
    {
      name: "Christian Duncan",
      role: "Co-founder & COO",
      image: "/images/christian-duncan.png",
      description:
        "Christian turns complex hiring plans into clear delivery systems for fast-moving product teams.",
      linkedin: "https://www.linkedin.com/in/christian-duncan",
    },
    {
      name: "Cruz Hamer",
      role: "Co-founder & CTO",
      image: "/images/cruz-hamer.png",
      description:
        "Cruz aligns technical strategy, staffing, and execution so distributed teams can ship with confidence.",
      linkedin: "https://www.linkedin.com/in/cruz-hamer",
      twitter: "https://x.com/cruz_hamer",
    },
    {
      name: "Drake Heaton",
      role: "Business Development Lead",
      image: "/images/drake-heaton.png",
      description:
        "Drake helps clients scope the right talent mix and build delivery plans that hold up under pressure.",
      linkedin: "https://www.linkedin.com/in/drake-heaton",
    },
    {
      name: "Griffin Wise",
      role: "Lead Marketing",
      image: "/images/griffin-wise.png",
      description:
        "Griffin shapes the brand story and keeps our messaging grounded in the outcomes teams care about.",
      linkedin: "https://www.linkedin.com/in/griffin-wise",
      twitter: "https://x.com/griffin_wise",
    },
    {
      name: "Aden Allan",
      role: "Head of Talent",
      image: "/images/aden-allan.png",
      description:
        "Aden builds trusted candidate pipelines and matches specialists to teams with unusually high precision.",
      linkedin: "https://www.linkedin.com/in/aden-allan",
    },
  ];

  const clients = [
    {
      name: "The Verge",
      image: "/images/the-verge.png",
      width: 165,
      height: 28,
    },
    {
      name: "The Jakarta Post",
      image: "/images/the-jakarta-post.png",
      width: 184,
      height: 23,
    },
    {
      name: "The Guardian",
      image: "/images/the-guardian.png",
      width: 180,
      height: 28,
    },
    {
      name: "TechRadar",
      image: "/images/techradar.png",
      width: 165,
      height: 28,
    },
    {
      name: "Gadgets Now",
      image: "/images/gadgets-now.png",
      width: 98,
      height: 45,
    },
  ];

  return (
    <main className="relative overflow-x-clip bg-teal-800 text-neutral-0">
      <section
        aria-labelledby="about-hero-title"
        className="relative isolate overflow-hidden pt-32 sm:pt-34 md:pt-52 min-[768px]:max-[1024px]:box-border min-[768px]:max-[1025px]:h-139 min-[768px]:max-[1024px]:min-h-0 min-[768px]:max-[1024px]:max-h-139 min-[1025px]:min-h-0 min-[1025px]:max-h-129.25 min-[1025px]:pt-46.5 xl:pt-43.5"
      >
        <img
          src="/shapes/shape-07.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={200}
          className="pointer-events-none absolute -bottom-25 min-[768px]:max-[1025px]:bottom-0 right-0 z-0 h-auto w-25 max-w-none min-[768px]:max-[1024px]:bottom-0 min-[1025px]:bottom-0"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-277.5 px-6 pb-28 pt-6 sm:px-10 md:pb-36 min-[768px]:max-[1024px]:h-full min-[768px]:max-[1024px]:max-w-132 min-[768px]:max-[1024px]:items-center min-[768px]:max-[1024px]:px-10 min-[768px]:max-[1024px]:pb-16 min-[768px]:max-[1024px]:pt-0 min-[1025px]:px-20 min-[1025px]:pb-30 xl:px-0 min-[1025px]:pt-12.5">
          <div className="grid w-full gap-5 text-center min-[768px]:max-[1024px]:content-center min-[768px]:max-[1024px]:justify-items-center min-[768px]:max-[1024px]:gap-6 min-[1025px]:grid-cols-[minmax(0,16rem)_minmax(0,45.625rem)] min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-20 min-[1025px]:text-left">
            <div className="mt-4 flex justify-center min-[768px]:max-[1024px]:mt-0 min-[1025px]:justify-start">
              <h1
                id="about-hero-title"
                className="max-w-[8ch] text-preset-4 sm:text-[4rem] sm:leading-none min-[768px]:max-[1024px]:max-w-none min-[1025px]:text-preset-2"
              >
                About
              </h1>
            </div>

            <div className="mx-auto flex pl-2 flex-col items-center min-[768px]:max-[1025px]:max-w-143 min-[1025px]:mx-0 min-[1025px]:max-w-none min-[1025px]:items-start min-[1025px]:pt-4">
              <div
                aria-hidden="true"
                className="mb-10 h-1 w-12.5 bg-rose-500 min-[320px]:max-[1025px]:hidden min-[1025px]:mb-10"
              />

              <p className="w-full text-center text-preset-7-semibold text-neutral-0/90 min-[768px]:max-[1024px]:max-w-143 min-[1025px]:text-left min-[1025px]:text-preset-6-semibold">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We&apos;ll bring
                those teams to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-directors-title"
        className="relative isolate overflow-hidden bg-teal-850 px-6 py-22 sm:px-10 md:py-25 min-[1025px]:max-h-250.5 lg:px-20 lg:py-35 xl:px-0"
      >
        <img
          src="/shapes/shape-08.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={200}
          className="pointer-events-none absolute left-0 -top-25 min-[768px]:max-[1025px]:top-0 z-0 h-auto w-25 max-w-none min-[1025px]:top-0"
          loading="lazy"
          decoding="async"
        />

        <img
          src="/shapes/shape-09.svg"
          alt=""
          aria-hidden="true"
          width={147}
          height={100}
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-36.75 max-w-none"
          loading="lazy"
          decoding="async"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-277.5 flex-col items-center gap-12 md:gap-16 lg:gap-16">
          <h2
            id="about-directors-title"
            className="text-center text-preset-5 md:text-preset-3"
          >
            Meet the directors
          </h2>

          <div className="grid w-full justify-items-center gap-x-7.5 gap-y-13 md:grid-cols-2 lg:grid-cols-3">
            {directors.map((director) => (
              <AboutCard
                key={director.name}
                image={director.image}
                name={director.name}
                role={director.role}
                description={director.description}
                linkedin={director.linkedin}
                twitter={director.twitter}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-clients-title"
        className="relative isolate overflow-hidden bg-teal-900 px-6 py-22 sm:px-10 md:py-25 min-[1025px]:max-h-109.25 lg:px-20 lg:py-35 xl:px-0"
      >
        <img
          src="/shapes/shape-10.svg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="pointer-events-none absolute -left-25 min-[768px]:max-[1025px]:left-0 -top-25 min-[768px]:max-[1025px]:-top-25 xl:left-0 xl:top-0 z-0 h-auto max-w-none"
          loading="lazy"
          decoding="async"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-290 flex-col items-center gap-12 md:gap-12 min-[1025px]:h-full min-[1025px]:justify-center">
          <h2
            id="about-clients-title"
            className="text-center text-preset-5 min-[768px]:max-[1024px]:text-preset-5 min-[1025px]:text-preset-3 mt-1"
          >
            Some of our clients
          </h2>

          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-x-8 gap-y-4 sm:grid-cols-5 md:gap-x-10 md:gap-y-14 min-[1025px]:grid-cols-5 min-[1025px]:gap-x-12 min-[1025px]:gap-y-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex min-h-18 w-full items-center justify-center"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
