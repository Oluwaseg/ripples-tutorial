import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import CTASuccessSection from "../landing/cta-success-section";
import Motivation from "./motivation";

const About = () => {
  return (
    <main className="relative overflow-x-hidden mt-8 md:mt-0">
      <section className="bg-[radial-gradient(at_top_right,_var(--accent)_0%,_white_92%)]">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="text-center md:text-left w-full md:w-1/2">
            <span
              aria-hidden
              className="inline-flex items-center justify-center mb-4"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-70"
              >
                <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
              </svg>
            </span>
            <h1 className="text-3xl text-primary sm:text-4xl md:text-5xl lg:text-[57px] font-bold uppercase leading-tight sm:leading-12 md:leading-16">
              Welcome to <br />
              ripples tutorials
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-[17px] leading-6 sm:leading-7  max-w-2xl mx-auto md:mx-0">
              It is with great joy and a deep sense of purpose that I welcome
              you to Ripples.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={assets.author || "/placeholder.svg"}
              alt="Picture of the Author"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[420px] h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative w-full order-2 md:order-1">
            <span className="pointer-events-none absolute -bottom-6 sm:-bottom-8 md:-bottom-14 left-1/2 md:left-30 h-32 w-32 sm:h-44 sm:w-44 md:h-64 md:w-64 -translate-x-1/2 rounded-full bg-accent  opacity-30 z-[-1]" />
            <Image
              src={assets.girl || "/placeholder.svg"}
              alt="Student learning with guidance"
              width={500}
              height={500}
              className="w-full max-w-[400px] sm:max-w-[520px] md:max-w-[420px] h-auto mx-auto rounded-lg"
            />
            <div
              aria-hidden
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:-right-16 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
            >
              <Image
                src={assets.author || "/placeholder.svg"}
                alt=""
                width={56}
                height={56}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="w-full order-1 md:order-2">
            <span
              aria-hidden
              className="inline-flex items-center justify-center mb-3 md:mb-4"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7 text-accent opacity-70"
              >
                <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
              </svg>
            </span>
            <h2 className="text-xl text-primary sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
              A place where excellence …
            </h2>
            <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7  text-center md:text-left">
              "A place where excellence meets opportunity, and where every
              learner is guided to reach their fullest potential. Since our
              founding in 2015, Ripples Tutorials has been dedicated to one
              mission: bringing out the best in you. What began as a passion for
              helping students succeed has grown into an online school that
              supports learners across various stages – preparing them for the
              11+ exams, GCSEs, A Levels and other academic milestones with
              confidence and skill. At Ripples Tutorials, we don't just teach –
              we coach, inspire, and mentor."
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-primary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="w-full order-1 md:order-1">
              <span
                aria-hidden
                className="inline-flex items-center justify-center mb-3 md:mb-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-accent opacity-70"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
                </svg>
              </span>
              <h2 className="text-xl text-primary sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
                Our experienced tutors …
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7  text-center md:text-left">
                "Our experienced tutors are committed to providing structured,
                engaging, and effective learning tailored to each student's
                needs. <br /> We believe that academic success should never be
                out of reach, which is why we aim to deliver quality,
                results-driven education at an affordable cost."
              </p>
            </div>
            <div className="relative w-full order-2 md:order-2">
              <span className="pointer-events-none absolute -bottom-6 sm:-bottom-8 md:-bottom-14 -right-0 md:right-30 h-32 w-32 sm:h-44 sm:w-44 md:h-64 md:w-64 translate-x-1/2 md:translate-x-1/2 rounded-full bg-primary z-[-1]" />
              <Image
                src={assets.woman || "/placeholder.svg"}
                alt="Student learning with guidance"
                width={500}
                height={500}
                className="w-full max-w-[400px] sm:max-w-[520px] md:max-w-[420px] h-auto mx-auto rounded-lg"
              />
              <div
                aria-hidden
                className="absolute bottom-3 left-2 sm:bottom-4 sm:left-3 md:bottom-5 md:left-7 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
              >
                <Image
                  src={assets.author || "/placeholder.svg"}
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="w-full order-1 md:order-1 px-4 md:px-16 lg:px-24 py-12 md:py-0">
              <span
                aria-hidden
                className="inline-flex items-center justify-center mb-3 md:mb-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary opacity-70"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
                </svg>
              </span>
              <h2 className="text-xl text-accent sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 text-left">
                Our vision is bold ...
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-left">
                "Our vision is bold: to create an online school that stands as a
                beacon of excellence and hope. We strive to be a trusted
                learning companion in your child's academic journey – fostering
                not only strong exam results but also self-discipline, critical
                thinking, and a lasting love for learning. <br /> Whether you're
                here for 11+ preparation or navigating the path to top GCSEs/A
                Level grades, we are honoured to be part of your journey. With
                dedication, the right guidance, and a shared commitment to
                success, we truly believe there is no limit to what our students
                can achieve. Thank you for choosing Ripples Tutorials. <br />{" "}
                Together, let's ripple out excellence – one student at a time."
              </p>
            </div>
            <div className="relative w-full order-2 md:order-2">
              <Image
                src={assets.boy || "/placeholder.svg"}
                alt="Student learning with guidance"
                width={500}
                height={500}
                className="w-full max-w-full h-auto mx-auto"
              />
              <div
                aria-hidden
                className="absolute bottom-3 left-2 sm:bottom-4 sm:left-3 md:bottom-5 md:-left-16 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
              >
                <Image
                  src={assets.author || "/placeholder.svg"}
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 overflow-hidden my-4 md:my-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="relative w-full order-2 md:order-1">
              <Image
                src={assets.nature || "/placeholder.svg"}
                alt="Student learning with guidance"
                width={500}
                height={500}
                className="w-full max-w-full h-auto mx-auto"
              />
              <div
                aria-hidden
                className="absolute bottom-3 right-2 sm:bottom-4 sm:right-3 md:bottom-5 md:-right-16 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
              >
                <Image
                  src={assets.author || "/placeholder.svg"}
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-full order-1 md:order-2 px-4 md:px-16 lg:px-24 py-12 md:py-0">
              <span
                aria-hidden
                className="inline-flex items-center justify-center mb-3 md:mb-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-accent opacity-70"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
                </svg>
              </span>
              <h2 className="text-xl text-primary sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 text-left">
                All Year Round
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-left">
                "At Ripples Tutorials, we provide tuition all year round to
                ensure consistent learning and steady progress. While our
                sessions run throughout the year, we observe short breaks to
                allow students and tutors time to refresh:"
              </p>
              <ul className="px-6 md:px-10 list-disc text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-left">
                <li> Easter Break – 5 Days</li>
                <li>Summer Break – 10 days</li>
                <li>Christmas & New Year's Break – 12 days</li>
              </ul>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-left">
                Bank Holidays – At our discretion. <br />
                Our commitment is to prepare you thoroughly so that you excel in
                your exams with confidence and success."
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary/30 overflow-hidden">
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="relative w-full order-2 md:order-1">
              <span className="pointer-events-none absolute -bottom-6 sm:-bottom-8 md:-bottom-14 left-1/2 md:left-30 h-32 w-32 sm:h-44 sm:w-44 md:h-64 md:w-64 -translate-x-1/2 rounded-full bg-primary opacity-30 z-[-1]" />
              <Image
                src={assets.computer || "/placeholder.svg"}
                alt="Student learning with guidance"
                width={500}
                height={500}
                className="w-full max-w-[400px] sm:max-w-[520px] md:max-w-[420px] h-auto mx-auto rounded-lg"
              />
              <div
                aria-hidden
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 p-1"
              >
                <Image
                  src={assets.author || "/placeholder.svg"}
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="w-full order-1 md:order-2">
              <span
                aria-hidden
                className="inline-flex items-center justify-center mb-3 md:mb-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary opacity-70"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.64 1.2 2.8 2.76 2.8-.1 1.46-.86 2.78-2.26 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.1-3.05 5.1-6.12C10.1 7.5 8.87 6 7.17 6Zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.64 1.19 2.8 2.75 2.8-.09 1.46-.86 2.78-2.25 3.94-.2.16-.26.44-.14.67.12.23.39.35.64.28 3.13-.83 5.09-3.05 5.09-6.12 0-3.25-1.22-4.77-2.92-4.77Z" />
                </svg>
              </span>
              <h2 className="text-xl text-accent sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
                Academic Resources
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7  text-center md:text-left">
                "We provide our students with a wide range of academic
                resources, including:"
              </p>
              <ul className="px-10 list-disc text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-center md:text-left">
                <li>Instructional Videos</li>
                <li>Powerpoint Presentations</li>
                <li>Class Notes, Periodic Tests,</li>
                <li>Weekly Online Assessments</li>
                <li>and PDF Worksheets.</li>
              </ul>
              <p className="text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7  text-center md:text-left">
                These learning tools are accessible year-round, ensuring that
                students can continue their education seamlessly from any
                location in the world. Our approach has consistently proven
                effective in supporting students as they build knowledge,
                strengthen skills, and achieve academic excellence."
              </p>
            </div>
          </div>
        </section>
      </div>
      <Motivation />
      <CTASuccessSection />
    </main>
  );
};

export default About;
