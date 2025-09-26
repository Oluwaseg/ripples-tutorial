import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="relative ">
      <section className="bg-[radial-gradient(at_top_left,_#FA61661C_0%,_#FFFFFF_92%)]">
        <div className="container py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <span
              aria-hidden
              className="inline-flex items-center justify-center mb-4"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-purple-500 opacity-70"
              >
                <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
              </svg>
            </span>
            <h1 className="text-[57px] font-bold uppercase leading-16">
              Welcome to <br />
              ripples tutorials
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted-foreground">
              It is with great joy and a deep sense of purpose that I welcome
              you to Ripples.
            </p>
          </div>
          <Image
            src={assets.author}
            alt="Picture of the Author"
            width={500}
            height={500}
            className="w-full max-w-[420px] h-auto"
          />
        </div>
      </section>

      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full">
          <span className="pointer-events-none absolute -bottom-8 md:-bottom-14 left-30 h-44 w-44 md:h-64 md:w-64 -translate-x-1/2 rounded-full bg-purple-500 opacity-30 z-[-1]" />
          <Image
            src={assets.girl}
            alt="Student learning with guidance"
            width={500}
            height={500}
            className="w-full max-w-[520px] h-auto mx-auto"
          />
          <div
            aria-hidden
            className="absolute bottom-3 right-3 md:bottom-5 md:right-5 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
          >
            <Image
              src={assets.author}
              alt=""
              width={56}
              height={56}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="w-full">
          <span
            aria-hidden
            className="inline-flex items-center justify-center mb-3 md:mb-4"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-purple-500 opacity-70"
            >
              <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
            </svg>
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
            A place where excellence …
          </h2>
          <p className="text-[16px] leading-7 text-muted-foreground text-center md:text-left">
            “A place where excellence meets opportunity, and where every learner
            is guided to reach their fullest potential. Since our founding in
            2015, Ripples Tutorials has been dedicated to one mission: bringing
            out the best in you. What began as a passion for helping students
            succeed has grown into an online school that supports learners
            across various stages – preparing them for the 11+ exams, GCSEs, A
            Levels and other academic milestones with confidence and skill. At
            Ripples Tutorials, we don’t just teach – we coach, inspire, and
            mentor.”
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
