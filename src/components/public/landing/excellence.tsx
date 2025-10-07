"use client";

import { assets } from "@/assets";
import Image from "next/image";
import { useState } from "react";

export default function Excellence() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section - Left on desktop, top on mobile */}
          <div
            className="relative order-1 lg:order-1 animate-slide-in-left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="fade-down"
          >
            {/* Decorative accent circle */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />

            {/* Main image container with hover effects */}
            <div
              className={`
              relative rounded-2xl overflow-hidden shadow-2xl
              transition-all duration-500 ease-out
              ${isHovered ? "scale-105 shadow-accent/50" : "scale-100"}
            `}
            >
              {/* Glowing border effect on hover */}
              <div
                className={`
                absolute inset-0 rounded-2xl
                transition-opacity duration-500
                ${isHovered ? "opacity-100" : "opacity-0"}
                bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50
                blur-xl -z-10
              `}
              />

              {/* Image with floating animation */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/90 via-primary to-primary/80">
                <Image
                  src={assets.excellence}
                  alt="Excellence in education - graduation cap with digital network"
                  fill
                  className={`
                    object-cover
                    transition-transform duration-700 ease-out
                    ${isHovered ? "scale-110" : "scale-100"}
                  `}
                  priority
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Section - Right on desktop, bottom on mobile */}
          <div
            className="order-2 lg:order-2 space-y-6 animate-slide-in-right"
            data-aos="fade-left"
          >
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-up"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                A place where excellence{" "}
                <span className="text-primary">meets opportunity</span>
              </h2>

              <div
                className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>

            <div
              className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p
                className="text-base md:text-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A place where excellence meets opportunity, and where every
                learner is guided to reach their fullest potential.
              </p>

              <p
                className="text-base md:text-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Since our founding in 2015, Ripples Tutorials has been dedicated
                to one mission: bringing out the best in you.
              </p>

              <p
                className="text-base md:text-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                What began as a passion for helping students succeed has grown
                into an online school that supports learners across various
                stages – preparing them for
              </p>

              <ul className="space-y-2 ml-4">
                <li
                  className="flex items-start gap-2"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>the 11+ exams, GCSEs, A Levels</span>
                </li>
                <li
                  className="flex items-start gap-2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>
                    and other academic milestones with confidence and skill.
                  </span>
                </li>
              </ul>

              <p
                className="text-base md:text-lg font-medium text-foreground"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                At Ripples Tutorials,
              </p>

              <p
                className="text-base md:text-lg italic"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                we don't just teach – we coach, inspire, and mentor.
              </p>
            </div>

            {/* Decorative element */}
            <div
              className="flex gap-2 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
              aria-hidden="true"
              data-aos="fade-up"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div
                className="w-2 h-2 rounded-full bg-accent animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
