import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-teal-900 text-neutral-0">
      <div className="bg-teal-800">
        <Navbar className="relative z-20 bg-transparent" />

        <section
          aria-labelledby="home-hero-title"
          className="relative isolate overflow-hidden px-6 pb-24 pt-10 sm:px-10 sm:pb-28 lg:h-[700px] lg:px-41.25 lg:pb-24 lg:pt-30.25"
        >
          <Image
            src="/shapes/shape-01.svg"
            alt=""
            aria-hidden="true"
            width={100}
            height={200}
            className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block"
            priority
          />

          <Image
            src="/shapes/shape-02.svg"
            alt=""
            aria-hidden="true"
            width={358}
            height={100}
            className="pointer-events-none absolute bottom-0 left-1/2 w-89.5 max-w-none -translate-x-1/2 sm:left-auto sm:right-10 sm:translate-x-0 lg:right-41.25"
            priority
          />

          <div className="relative z-10 flex h-full items-center">
            <div className="relative grid w-full gap-14 md:gap-18 lg:grid-cols-[minmax(0,635px)_minmax(0,445px)] lg:items-center lg:justify-between lg:gap-8">
              <div className="relative max-w-[39.6875rem]">
                <h1
                  id="home-hero-title"
                  className="text-preset-1 relative max-w-[10ch] text-[clamp(2.5rem,10vw,6.25rem)] leading-[0.95]"
                >
                  Find the best <span className="text-rose-500">talent</span>
                </h1>
              </div>

              <div className="max-w-111.25 lg:justify-self-end">
                <div
                  aria-hidden="true"
                  className="mb-20 hidden h-1 w-12.5 bg-teal-400 lg:block"
                />

                <p className="text-preset-6-semibold text-balance text-neutral-0/90 max-lg:max-w-[36ch]">
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren&apos;t tapping into the
                  abundance of global talent. We&apos;re about to change that.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
