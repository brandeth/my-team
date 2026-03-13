import Image from "next/image";

import Navbar from "./components/Navbar";

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

  return (
    <main className="relative overflow-x-clip text-neutral-0">
      <section
        aria-labelledby="home-hero-title"
        className="relative isolate bg-teal-800"
      >
        <Navbar className="relative z-20 bg-transparent pt-8" />

        {/* pt-10 md:pt-12 min-[1025px]:pt-12 xl:px-41.25 */}
        <div className="flex h-139 justify-center overflow-hidden px-6 pb-24 max-[767px]:h-109.5 max-[767px]:pb-10 sm:px-10 md:pb-36 min-[1024px]:h-128.5 min-[1025px]:h-131.5 min-[1025px]:px-10 min-[1025px]:pb-24 xl:px-32">
          <Image
            src="/shapes/shape-01.svg"
            alt=""
            aria-hidden="true"
            width={100}
            height={200}
            className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 min-[1025px]:block"
            priority
          />

          <Image
            src="/shapes/shape-02.svg"
            alt=""
            aria-hidden="true"
            width={358}
            height={100}
            className="pointer-events-none absolute bottom-0 left-1/2 w-89.5 max-w-none -translate-x-1/2 max-[767px]:bottom-0 max-[767px]:w-104 min-[1025px]:left-auto min-[1025px]:right-10 min-[1025px]:translate-x-0 xl:right-41.25"
            priority
          />

          <div className="relative z-10 flex items-center max-[767px]:w-full max-[767px]:items-center">
            <div className="relative grid w-full gap-14 max-[1024px]:justify-items-center max-[767px]:gap-6 md:gap-8 min-[1025px]:mb-8 min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(18rem,27.8125rem)] min-[1025px]:items-center min-[1025px]:justify-between min-[1025px]:gap-10 xl:grid-cols-[minmax(0,635px)_minmax(0,445px)] xl:gap-8">
              <div className="relative flex w-full justify-center max-[1024px]:text-center min-[1025px]:justify-start">
                <h1
                  id="home-hero-title"
                  className="relative max-w-[10ch] text-center min-[320px]:text-preset-4 min-[768px]:text-preset-2 max-[767px]:max-w-[9.75ch] max-[767px]:leading-[0.95] min-[1025px]:max-w-[10ch] min-[1025px]:text-left min-[1025px]:text-preset-1"
                >
                  Find the{" "}
                  <span className="min-[1025px]:block min-[1025px]:whitespace-nowrap">
                    best <span className="text-rose-500">talent</span>
                  </span>
                </h1>
              </div>

              <div className="w-full max-[1024px]:text-center max-[767px]:max-w-84 min-[1025px]:max-w-111.25 min-[1025px]:justify-self-end max-[767px]:pb-24">
                <div
                  aria-hidden="true"
                  className="mb-20 hidden h-1 w-12.5 bg-teal-400 min-[1025px]:block"
                />

                <p className="min-[1024px]:max-w-172 text-center text-preset-7-semibold text-neutral-0/90 max-[767px]:mx-auto max-[1024px]:max-w-140 min-[1025px]:text-left min-[1025px]:text-preset-6-semibold">
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren&apos;t tapping into the
                  abundance of global talent. We&apos;re about to change that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  min-[1025px]:h-171 md:py-32 */}
      <section
        aria-labelledby="home-features-title"
        className="min-[1025px] min-[1025px]:h-171 relative isolate overflow-hidden bg-teal-900 px-6 py-16 sm:px-10 min-[1025px]:px-10 min-[1025px]:py-0 xl:px-32 flex flex-col justify-center"
      >
        <Image
          src="/shapes/shape-03.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={244}
          className="pointer-events-none absolute right-0 bottom-0 w-25 max-w-none"
        />

        <div className="flex flex-col px-12">
          <div
            aria-hidden="true"
            className="h-1 w-12.5 bg-rose-500 max-[1024px]:mx-auto"
          />

          <div className="relative z-10 grid gap-14 min-[1025px]:h-full min-[1025px]:grid-cols-[minmax(0,27.8125rem)_minmax(0,40.75rem)] min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-28 ">
            <div className="max-[1024px]:mx-auto max-[1024px]:text-center min-[1025px]:self-start ">
              <h2
                id="home-features-title"
                className="text-preset-4 min-[1025px]:text-preset-3 mt-16"
              >
                Build &amp; manage distributed teams like no one else.
              </h2>
            </div>

            <div className="grid gap-12 min-[1025px]:self-center min-[1025px]:content-center min-[1025px]:gap-6 min-[1025px]:py-10 min-[1025px]:pt-16">
              {featureHighlights.map((feature) => (
                <article
                  key={feature.title}
                  className="grid gap-4 max-[1024px]:justify-items-center max-[1024px]:text-center min-[1025px]:grid-cols-[5rem_minmax(0,1fr)] min-[1025px]:items-start min-[1025px]:gap-4"
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

                  <div className="grid gap-2 min-[1025px]:pt-2">
                    <h3 className="text-preset-6-bold text-rose-500">
                      {feature.title}
                    </h3>

                    <p className="text-preset-7-semibold text-neutral-0">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
