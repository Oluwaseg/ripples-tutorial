"use client";

import { assets } from "@/assets";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="relative py-16 md:py-24 mt-15 md:mt-0 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Our vision is bold ...
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed border-l-4 border-accent pl-6">
              <p>
                Our vision is bold: to create an online school that stands as a
                beacon of excellence and hope.
              </p>
              <p>
                We strive to be a trusted learning companion in your child's
                academic journey – fostering not only strong exam results but
                also self-discipline, critical thinking, and a lasting love for
                learning.
              </p>
              <p>
                Whether you're here for 11+ preparation or navigating the path
                to top GCSE/A Level grades, we are honoured to be part of your
                journey.
              </p>
              <p>
                We understand the power of your trust and commitment to success,
                we truly believe there is no limit to what our students can
                achieve.
              </p>
              <p className="font-semibold text-foreground">
                Thank you for choosing Ripples Tutorials.
              </p>
              <p className="italic text-accent">
                Together, let's ripple out excellence – one student at a time.
              </p>
            </div>

            {/* Decorative line */}
            <div className="h-px bg-gradient-to-r from-accent via-primary/20 to-transparent animate-expand" />
          </div>

          {/* Image - Right Side */}
          <div className="relative animate-slide-in-right">
            {/* Decorative background circle */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

            {/* Main image container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-accent/20 group-hover:scale-[1.02]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <Image
                  src={assets.vision}
                  alt="Student learning online with dedication and focus"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
