import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-teal-900 text-neutral-0">
      <div className="bg-teal-800">
        <Navbar className="relative z-20 bg-transparent pt-8" />

        {/* pt-10 md:pt-12 min-[1025px]:pt-12 xl:px-41.25 */}
        <section
          aria-labelledby="home-hero-title"
          className=" isolate flex justify-center overflow-hidden px-6 pb-24  sm:px-10 md:pb-36 h-[556px] min-[1024px]:h-[514px]  min-[1025px]:h-[526px] min-[1025px]:px-10 min-[1025px]:pb-24 xl:px-32"
        >
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
            className="pointer-events-none absolute bottom-0 left-1/2 w-89.5 max-w-none -translate-x-1/2 min-[1025px]:left-auto min-[1025px]:right-10 min-[1025px]:translate-x-0 xl:right-41.25"
            priority
          />

          <div className="relative z-10 flex items-center ">
            <div className="relative grid w-full gap-14 max-[1024px]:justify-items-center md:gap-8 min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(18rem,27.8125rem)] min-[1025px]:items-center min-[1025px]:justify-between min-[1025px]:gap-10 xl:grid-cols-[minmax(0,635px)_minmax(0,445px)] xl:gap-8 min-[1025px]:mb-8">
              <div className="relative max-[1024px]:text-center min-[1025px]:justify-start flex w-full justify-center">
                <h1
                  id="home-hero-title"
                  className="relative max-w-[10ch] text-preset-2 text-center min-[1025px]:text-left min-[1025px]:text-preset-1"
                >
                  Find the{" "}
                  <span className="min-[1025px]:block min-[1025px]:whitespace-nowrap">
                    best <span className="text-rose-500">talent</span>
                  </span>
                </h1>
              </div>

              <div className="w-full max-[1024px]:text-center min-[1025px]:max-w-111.25 min-[1025px]:justify-self-end">
                <div
                  aria-hidden="true"
                  className="mb-20 hidden h-1 w-12.5 bg-teal-400 min-[1025px]:block"
                />

                <p className="text-preset-7-semibold text-neutral-0/90 max-w-[36rem] text-center min-[1025px]:text-left">
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
