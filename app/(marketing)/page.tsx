import Image from "next/image";

import ContactCta from "../components/ContactCta";

export default function Home() {
  const featureHighlights = [
    {
      title: "Experienced Individuals",
      description:
        "Our network is made up of seasoned specialists who care deeply about building stronger teams.",
      icon: "/icons/experienced-individuals.svg",
    },
    {
      title: "Easy to Implement",
      description:
        "Our approach is refined for fast adoption, so your team can start moving with confidence.",
      icon: "/icons/easy-to-implement.svg",
    },
    {
      title: "Enhanced Productivity",
      description:
        "Built-in insight and support help distributed teams stay aligned, accountable, and effective.",
      icon: "/icons/enhanced-productivity.svg",
    },
  ];

  const testimonials = [
    {
      quote:
        "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
      name: "Kady Baker",
      role: "Product Manager at Bookmark",
      image: "/images/kady-baker.png",
    },
    {
      quote:
        "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
      name: "Aiysha Reese",
      role: "Founder of Manage",
      image: "/images/aiysha-reese.png",
    },
    {
      quote:
        "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
      name: "Arthur Clarke",
      role: "Co-founder of MyPhysio",
      image: "/images/arthur-clarke.png",
    },
  ];

  return (
    <main className="relative overflow-x-clip text-neutral-0">
      <section
        aria-labelledby="home-hero-title"
        className="relative isolate bg-teal-800 pt-[8rem] sm:pt-[8.5rem] md:pt-[13rem] lg:pt-[11.625rem] xl:pt-[10.875rem]"
      >
        <div className="flex h-139 justify-center overflow-hidden px-6 pb-24 max-[767px]:h-109.5 max-[767px]:pb-10 sm:px-10 md:pb-36 min-[1024px]:h-128.5 min-[1025px]:h-131.5 min-[1025px]:px-10 min-[1025px]:pb-24 min-[1025px]:max-[1279px]:mx-auto min-[1025px]:max-[1279px]:w-full min-[1025px]:max-[1279px]:max-w-279 xl:px-32">
          <Image
            src="/shapes/shape-01.svg"
            alt=""
            aria-hidden="true"
            width={100}
            height={200}
            className="pointer-events-none absolute left-0 top-1/2 hidden min-[1025px]:max-[1279px]:hidden -translate-y-1/2 min-[1025px]:block"
            priority
          />

          <Image
            src="/shapes/shape-02.svg"
            alt=""
            aria-hidden="true"
            width={358}
            height={100}
            className="pointer-events-none absolute bottom-0 left-1/2 w-89.5 max-w-none -translate-x-1/2 max-[767px]:bottom-0 max-[767px]:w-88 min-[1025px]:left-auto min-[1025px]:right-10 min-[1025px]:translate-x-0 min-[1025px]:max-[1279px]:right-0 min-[1025px]:max-[1279px]:w-76 xl:right-41.25"
            priority
          />

          <div className="relative z-10 flex items-center max-[767px]:w-full max-[767px]:items-center">
            <div className="relative grid w-full gap-14 max-[1024px]:justify-items-center max-[767px]:gap-6 md:gap-8 min-[1025px]:mb-8 min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(18rem,27.8125rem)] min-[1025px]:items-center min-[1025px]:justify-between min-[1025px]:gap-10 min-[1025px]:max-[1279px]:grid-cols-[minmax(0,1fr)_minmax(18rem,23.5rem)] min-[1025px]:max-[1279px]:gap-8 xl:grid-cols-[minmax(0,635px)_minmax(0,445px)] xl:gap-8">
              <div className="relative flex w-full justify-center max-[1024px]:text-center min-[1025px]:justify-start">
                <h1
                  id="home-hero-title"
                  className="relative max-w-[10ch] text-center min-[320px]:text-preset-4 min-[768px]:text-preset-2 max-[767px]:max-w-[9.75ch] max-[767px]:leading-[0.95] min-[1025px]:max-w-[10ch] min-[1025px]:text-left min-[1025px]:text-preset-1 min-[1025px]:max-[1279px]:max-w-[9ch] min-[1025px]:max-[1279px]:text-preset-2"
                >
                  Find the{" "}
                  <span className="min-[1025px]:block min-[1025px]:whitespace-nowrap">
                    best <span className="text-rose-500">talent</span>
                  </span>
                </h1>
              </div>

              <div className="w-full max-[1024px]:text-center max-[767px]:max-w-84 min-[1025px]:max-w-111.25 min-[1025px]:justify-self-end min-[1025px]:max-[1279px]:max-w-94 max-[767px]:pb-24">
                <div
                  aria-hidden="true"
                  className="mb-20 hidden h-1 w-12.5 bg-teal-400 min-[1025px]:block min-[1025px]:max-[1279px]:mb-16"
                />

                <p className="min-[1024px]:max-w-172 text-center text-preset-7-semibold text-neutral-0/90 max-[767px]:mx-auto max-[1024px]:max-w-140 min-[1025px]:text-left min-[1025px]:text-preset-6-semibold min-[1025px]:max-[1279px]:max-w-94">
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren&apos;t tapping into the
                  abundance of global talent. We&apos;re about to change that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="home-features-title"
        className="min-[1025px] min-[1025px]:h-171 relative isolate overflow-hidden bg-teal-900 px-6 py-16 sm:px-10 min-[768px]:py-24 min-[1025px]:px-10 min-[1025px]:pt-36 xl:px-32 flex flex-col justify-center"
      >
        <Image
          src="/shapes/shape-03.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={244}
          className="pointer-events-none absolute right-0 top-0 w-25 max-w-none min-[1025px]:hidden"
        />

        <Image
          src="/shapes/shape-03.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={244}
          className="pointer-events-none absolute right-0 bottom-0 hidden w-25 max-w-none min-[1025px]:block"
        />

        <div className="flex flex-col min-[768px]:px-10">
          <div aria-hidden="true" className="h-1 w-12.5 bg-rose-500" />

          <div className="relative z-10 grid gap-14 min-[768px]:gap-16 min-[1025px]:h-full min-[1025px]:grid-cols-[minmax(0,27.8125rem)_minmax(0,40.75rem)] min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-28 ">
            <div className="min-[1025px]:self-start ">
              <h2
                id="home-features-title"
                className="mt-8 text-preset-5 min-[768px]:mt-12 min-[768px]:text-left min-[1025px]:text-preset-3 max-[767px]:max-w-58 min-[768px]:max-w-125 min-[1024px]:max-w-none"
              >
                Build &amp; manage distributed teams like no one else.
              </h2>
            </div>

            <div className="grid gap-12 min-[768px]:gap-8 min-[768px]:pb-10 min-[1025px]:self-center min-[1025px]:content-center min-[1025px]:gap-6 min-[1025px]:py-10 min-[1025px]:pt-12">
              {featureHighlights.map((feature) => (
                <article
                  key={feature.title}
                  className="grid gap-4 max-[767px]:justify-items-center max-[767px]:text-center min-[768px]:grid-cols-[5rem_minmax(0,1fr)] min-[768px]:items-start min-[768px]:gap-5 min-[1025px]:gap-4"
                >
                  <div className="relative h-18 w-18 shrink-0">
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 h-14 w-14 rounded-full bg-teal-700"
                    />

                    <Image
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      width={56}
                      height={56}
                      className="absolute left-0 top-0 z-10 h-14 w-14 shrink-0"
                    />
                  </div>

                  <div className="grid gap-2 min-[768px]:pt-2">
                    <h3 className="text-preset-6-bold text-rose-500">
                      {feature.title}
                    </h3>

                    <p className="text-preset-7-semibold opacity-80 text-neutral-0">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-testimonials-title"
        className="relative isolate overflow-hidden bg-teal-850 px-6 py-35 sm:px-10 min-[768px]:h-[1199px] min-[768px]:py-25 min-[1025px]:h-[745px] min-[1025px]:px-10 min-[1025px]:py-35 xl:px-32"
      >
        <Image
          src="/shapes/shape-04.svg"
          alt=""
          aria-hidden="true"
          width={147}
          height={100}
          className="pointer-events-none absolute left-0 top-0 w-36.75 max-w-none"
        />

        <Image
          src="/shapes/shape-05.svg"
          alt=""
          aria-hidden="true"
          width={200}
          height={100}
          className="pointer-events-none absolute bottom-0 right-0 w-50 max-w-none"
        />

        <div className="relative z-10 mx-auto flex max-w-279 flex-col items-center gap-12 min-[768px]:gap-16">
          <h2
            id="home-testimonials-title"
            className="max-w-none min-[768px]:max-w-44 text-center text-preset-5 text-neutral-0 min-[768px]:max-w-120 min-[768px]:text-preset-5 min-[1025px]:text-preset-3 min-[1025px]:max-w-237.5"
          >
            Delivering real results for top companies. Some of our{" "}
            <span className="text-cyan-100">success stories.</span>
          </h2>

          <div className="grid w-full gap-16 min-[768px]:gap-12 min-[1025px]:grid-cols-3 min-[1025px]:items-start min-[1025px]:gap-7.5">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src="/quotation-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={67}
                  height={56}
                  className="pointer-events-none -mb-5 h-14 w-16.75"
                />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <p className="text-preset-7-semibold text-neutral-0 min-[768px]:max-w-150 min-[1025px]:max-w-none">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex flex-col items-center gap-0.5">
                    <p className="text-preset-6-bold text-cyan-100">
                      {testimonial.name}
                    </p>

                    <p className="text-preset-8 text-neutral-0">
                      {testimonial.role}
                    </p>
                  </div>

                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="mt-4 h-15 w-15 rounded-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
