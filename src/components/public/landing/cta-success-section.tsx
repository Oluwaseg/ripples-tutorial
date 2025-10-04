import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASuccessSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 min-h-[240px] sm:min-h-[260px] lg:min-h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={assets.cta}
              alt="Student giving thumbs up"
              className="w-full h-full object-cover object-center"
              layout="fill"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-24 h-full min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFF6F6] mb-2 sm:mb-3 leading-tight text-balance">
              Your Child's Success
              <br />
              Starts Here!
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-5 lg:mb-6  leading-relaxed text-pretty whitespace-nowrap">
              Explore our most popular programs designed to help students
              achieve academic excellence.
            </p>

            {/* CTA Button */}
            <Button className="bg-transparent border-2 border-white text-white hover:bg-transparent transition-all duration-300 px-12 sm:px-16 lg:px-20 py-4 sm:py-5 text-sm sm:text-base font-medium rounded-full flex items-center transform hover:scale-105">
              ENROLL NOW
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
