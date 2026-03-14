import Image from "next/image";

import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  const contactTopics = [
    {
      label: "The quality of our talent network",
      icon: "/icons/experienced-individuals.svg",
    },
    {
      label: "Usage & implementation of our software",
      icon: "/icons/easy-to-implement.svg",
    },
    {
      label: "How we help drive innovation",
      icon: "/icons/enhanced-productivity.svg",
    },
  ];

  return (
    <main className="relative overflow-x-clip bg-teal-800 text-neutral-0">
      <section
        aria-labelledby="contact-page-title"
        className="relative isolate overflow-hidden pb-22 pt-32 sm:pb-24 sm:pt-34 md:pb-28 md:pt-52 min-[768px]:max-[1024px]:h-301 min-[768px]:max-[1024px]:pb-30 min-[1025px]:h-197.25 min-[1025px]:pb-24 min-[1025px]:pt-40"
      >
        <Image
          src="/shapes/shape-11.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={200}
          className="pointer-events-none absolute -left-16 top-18 z-0 hidden w-25 max-w-none sm:block sm:-left-10 sm:top-20 md:left-0 md:top-60 min-[768px]:max-[1024px]:-left-18 min-[768px]:max-[1024px]:top-46 min-[768px]:max-[1024px]:w-27 min-[1025px]:-left-8 min-[1025px]:top-61 xl:left-0 min-[1025px]:max-[1281px]:w-16"
          priority
        />

        <Image
          src="/shapes/shape-12.svg"
          alt=""
          aria-hidden="true"
          width={224}
          height={200}
          className="pointer-events-none absolute -bottom-28 -right-16 z-0 h-57 max-w-none min-[768px]:max-[1025px]:bottom-0 min-[768px]:max-[1024px]:-right-16 min-[1025px]:bottom-0 min-[1025px]:right-0  xl:-right-16 min-[1025px]:max-[1281px]:w-50 min-[1025px]:max-[1281px]:h-45"
          priority
        />
        {/* xl:h-56 xl:w-[224.49px] sm:w-64 sm:-right-20 */}

        <div className="relative z-10 mx-auto w-full px-6 sm:px-10 min-[768px]:max-[1024px]:h-full min-[768px]:max-[1024px]:max-w-143 min-[1025px]:h-full min-[1025px]:px-20 xl:max-w-277.5 xl:px-0">
          <div className="grid w-full gap-14 md:gap-16 min-[768px]:max-[1024px]:content-start min-[768px]:max-[1024px]:justify-items-center min-[768px]:max-[1024px]:gap-16 min-[1025px]:h-full min-[1025px]:content-center min-[1025px]:grid-cols-[minmax(0,28rem)_minmax(0,33.75rem)] min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,33.75rem)] xl:gap-18">
            <div className="flex flex-col items-center pt-8 text-center min-[768px]:max-[1025px]:mx-auto min-[768px]:max-[1025px]:w-full min-[768px]:max-[1025px]:max-w-120 min-[1025px]:items-start min-[1025px]:text-left min-[1025px]:pt-5 min-[1025px]:max-[1281px]:pt-0">
              <h1
                id="contact-page-title"
                className="text-preset-4 sm:text-[4rem] sm:leading-none min-[1025px]:text-preset-2"
              >
                Contact
              </h1>

              <p className="mt-4 text-preset-5 text-rose-500 md:text-preset-5 xl:mt-8">
                Ask us about
              </p>

              <div className="mt-12 grid w-full gap-6 min-[768px]:max-[1025px]:gap-2 min-[768px]:max-[1024px]:max-w-200 min-[768px]:max-[1024px]:gap-3 min-[1025px]:gap-2">
                {contactTopics.map((topic) => (
                  <article
                    key={topic.label}
                    className="grid w-full grid-cols-[5rem_minmax(0,1fr)] items-center gap-5 text-left"
                  >
                    <div className="relative h-18 w-18 shrink-0">
                      <span
                        aria-hidden="true"
                        className="absolute left-4 top-4 h-14 w-14 rounded-full bg-teal-700"
                      />

                      <Image
                        src={topic.icon}
                        alt=""
                        aria-hidden="true"
                        width={56}
                        height={56}
                        className="absolute left-0 top-0 z-10 h-14 w-14 shrink-0"
                      />
                    </div>

                    <p className="text-preset-6-bold text-neutral-0 sm:pt-1">
                      {topic.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="w-full min-[768px]:max-[1025px]:mx-auto min-[768px]:max-[1025px]:max-w-125 min-[768px]:max-[1025px]:pt-1 min-[1025px]:max-w-135 min-[1025px]:justify-self-end min-[1025px]:self-center min-[1025px]:pt-0 xl:pt-4">
              <ContactForm className="max-w-none bg-transparent px-0 py-0 sm:px-0 sm:py-0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
