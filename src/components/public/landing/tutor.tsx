"use client";

import { assets } from "@/assets";
import Image from "next/image";
import { useState } from "react";

export default function Tutor() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section - Left on desktop, top on mobile */}
          <div className="order-2 lg:order-1 space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-up">
                Our experienced tutors{" "}
                <span className="text-accent">are here for you</span>
              </h2>

              <div
                className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              />
            </div>

            <div
              className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-base md:text-lg">
                Our experienced tutors are committed to providing structured,
                engaging, and effective learning tailored to each student's
                needs.
              </p>

              <p className="text-base md:text-lg">
                We believe that academic success should never be out of reach,
              </p>

              <p className="text-base md:text-lg">
                which is why we aim to deliver quality, results-driven education
                at an affordable cost.
              </p>
            </div>

            {/* Stats or highlights */}
            <div
              className="grid grid-cols-2 gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Expert Tutors
                </div>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Students Helped
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right on desktop, bottom on mobile */}
          <div
            className="relative order-1 lg:order-2 animate-slide-in-right"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative accent circle */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Main image container with hover effects */}
            <div
              className={`
              relative rounded-2xl overflow-hidden shadow-2xl
              transition-all duration-500 ease-out
              ${isHovered ? "scale-105 shadow-primary/50" : "scale-100"}
            `}
            >
              {/* Glowing border effect on hover */}
              <div
                className={`
                absolute inset-0 rounded-2xl
                transition-opacity duration-500
                ${isHovered ? "opacity-100" : "opacity-0"}
                bg-gradient-to-br from-accent/50 via-primary/50 to-accent/50
                blur-xl -z-10
              `}
              />

              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={assets.tutor}
                  alt="Experienced tutor teaching online with engaging content"
                  fill
                  className={`
                    object-cover
                    transition-transform duration-700 ease-out
                    ${isHovered ? "scale-110" : "scale-100"}
                  `}
                  priority
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

                {/* Floating badge */}
                <div
                  className={`
                  absolute bottom-4 right-4 px-4 py-2 rounded-full
                  bg-accent text-accent-foreground font-semibold text-sm
                  shadow-lg backdrop-blur-sm
                  transition-all duration-500
                  ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                `}
                >
                  Live Sessions Available
                </div>
              </div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-2 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
