import Image from "next/image";

import Button from "./Button";

export default function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-title"
      className="relative isolate overflow-hidden bg-rose-500 px-6 py-20 sm:px-10 min-[768px]:h-50 min-[1025px]:px-10 xl:px-32"
    >
      <Image
        src="/shapes/shape-06.svg"
        alt=""
        aria-hidden="true"
        width={200}
        height={144}
        className="hidden min-[1025px]:block pointer-events-none absolute bottom-0 left-0 w-50 max-w-none"
      />

      <Image
        src="/shapes/shape-06.svg"
        alt=""
        aria-hidden="true"
        width={200}
        height={144}
        className="min-[768px]:block min-[1025px]:hidden pointer-events-none absolute -bottom-5 left-0 w-48 max-w-none"
      />

      <div className="relative z-10 mx-auto flex max-w-279 flex-col items-center justify-center gap-6 text-center min-[768px]:grid min-[768px]:h-full min-[768px]:grid-cols-[minmax(0,1fr)_auto] min-[768px]:items-center min-[768px]:gap-8 min-[768px]:text-left min-[768px]:px-10 min-[1025px]:px-22">
        <h2
          id="contact-cta-title"
          className="text-preset-5 min-[1025px]:text-preset-3 text-teal-900 min-[768px]:max-w-none"
        >
          Ready to get started?
        </h2>

        <Button
          href="/contact"
          variant="secondary"
          className="lowercase whitespace-nowrap"
        >
          <span>contact us</span>
        </Button>
      </div>
    </section>
  );
}
