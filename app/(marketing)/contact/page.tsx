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
        className="relative isolate overflow-hidden pb-22 pt-32 sm:pb-24 sm:pt-34 md:pb-28 md:pt-52 lg:pb-35 lg:pt-46.5 min-[1025px]:max-h-197.25 min-[1025px]:pb-24 min-[1025px]:pt-40"
      >
        <Image
          src="/shapes/shape-11.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={200}
          className="pointer-events-none absolute -left-16 top-18 z-0 w-25 max-w-none sm:-left-10 sm:top-20 md:-left-6 md:top-24 lg:-left-8 lg:top-54 xl:left-0"
          priority
        />

        <Image
          src="/shapes/shape-12.svg"
          alt=""
          aria-hidden="true"
          width={224}
          height={200}
          className="pointer-events-none absolute bottom-0 right-0 z-0 max-w-none sm:bottom-0 sm:right-0 lg:bottom-0 xl:w-[224.49px] xl:h-50 lg:right-0 xl:-right-16"
          priority
        />

        <div className="relative z-10 mx-auto w-full px-6 sm:px-10 lg:px-20 xl:max-w-277.5 xl:px-0">
          <div className="grid w-full gap-14 md:gap-16 lg:grid-cols-[minmax(0,28rem)_minmax(0,33.75rem)] lg:items-start lg:justify-between lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,33.75rem)] xl:gap-18">
            <div className="flex flex-col items-start text-left lg:pt-8">
              <h1
                id="contact-page-title"
                className="text-preset-4 sm:text-[4rem] sm:leading-none lg:text-preset-2"
              >
                Contact
              </h1>

              <p className="mt-4 text-preset-5 text-rose-500 md:text-preset-5">
                Ask us about
              </p>

              <div className="mt-10 grid w-full gap-5 sm:mt-12">
                {contactTopics.map((topic) => (
                  <article
                    key={topic.label}
                    className="grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-center sm:gap-5"
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

            <div className="w-full lg:max-w-135 lg:justify-self-end lg:pt-2 xl:pt-6">
              <ContactForm className="max-w-none bg-transparent px-0 py-0 sm:px-0 sm:py-0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
