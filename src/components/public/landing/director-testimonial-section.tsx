"use client";

import { assets } from "@/assets";
import { Quote, Sparkles, Award } from "lucide-react";
import Image from "next/image";

export default function DirectorTestimonialSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section badge */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                LEADERSHIP MESSAGE
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Director Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative elements behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent to-white/20 rounded-full blur-2xl opacity-30" />
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 border-4 border-white/20 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 border-4 border-accent/30 rounded-full" />

                {/* Main image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-white/10 to-transparent rounded-full animate-pulse [animation-duration:3s]" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                    <Image
                      src={assets.author || "/placeholder.svg"}
                      alt="MR. T. ABRAHAM"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl flex items-center gap-3 z-10">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold text-primary">
                      20+ Years
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-600">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Quote Content */}
            <div className="lg:col-span-7 text-white space-y-6 sm:space-y-8">
              {/* Large decorative quote mark */}
              <div className="relative">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-accent/30 absolute -top-4 -left-2 sm:-left-4" />

                <blockquote className="relative text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-light pl-8 sm:pl-12 lg:pl-16">
                  <span className="text-balance">
                    At Ripples Tutorials, education is not just about grades –
                    it's about building confidence and shaping futures. Our goal
                    is to provide an environment where every student feels
                    supported, inspired, and ready to excel.
                  </span>
                </blockquote>
              </div>

              {/* Author info with enhanced styling */}
              <div className="pt-4 sm:pt-6 pl-8 sm:pl-12 lg:pl-16">
                <div className="inline-block">
                  <div className="h-1 w-16 sm:w-20 bg-accent rounded-full mb-4" />
                  <p className="text-accent font-bold text-base sm:text-lg lg:text-xl tracking-wide mb-1">
                    MR. T. ABRAHAM
                  </p>
                  <p className="text-white/80 text-sm sm:text-base font-medium">
                    Director of Studies
                  </p>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="hidden lg:flex items-center gap-8 pt-6 pl-16">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Excellence
                    </p>
                    <p className="text-white/70 text-xs">Driven</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Student</p>
                    <p className="text-white/70 text-xs">Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
