"use client";

import { assets } from "@/assets";
import ConfidenceSection from "@/components/public/landing/confidence-section";
import CTASuccessSection from "@/components/public/landing/cta-success-section";
import DirectorTestimonialSection from "@/components/public/landing/director-testimonial-section";
import Dreams from "@/components/public/landing/dreams";
import EducationalFeatures from "@/components/public/landing/educational-features";
import Excellence from "@/components/public/landing/excellence";
import ParentTestimonialsSection from "@/components/public/landing/parent-testimonials-section";
import PopularCoursesSection from "@/components/public/landing/popular-courses-section";
import Tutor from "@/components/public/landing/tutor";
import Vision from "@/components/public/landing/vision";
import WhyChooseSection from "@/components/public/landing/why-choose-section";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[50vh] md:h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={assets.hero} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          {/* Animated pulse rings */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping [animation-duration:2s]" />
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping [animation-duration:2s] [animation-delay:0.5s]" />
          </div>

          <Button
            onClick={() => setIsVideoModalOpen(true)}
            className="relative bg-gradient-to-r from-accent via-accent to-primary hover:from-accent hover:via-primary hover:to-accent text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-base tracking-wide flex items-center gap-3 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-accent/50 group overflow-hidden"
          >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            {/* Animated play icon with pulsing circle */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-white relative z-10" />
            </div>

            <span className="relative z-10 font-heading">WATCH FULL VIDEO</span>
          </Button>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-50 -z-10" />

            {/* Now Playing Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6 z-10">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-semibold tracking-wide">
                  NOW PLAYING
                </span>
              </div>
            </div>

            {/* Close Button */}
            <Button
              onClick={() => setIsVideoModalOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-20 text-white hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:rotate-90 hover:scale-110"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            {/* Full Video */}
            <video controls autoPlay className="w-full h-full">
              <source src={assets.hero} type="video/mp4" />
              <p className="text-white p-8">
                Your browser does not support the video tag.
              </p>
            </video>
          </div>
        </div>
      )}

      <Dreams />
      <ConfidenceSection />
      <Vision />
      <EducationalFeatures />
      <Excellence />
      <Tutor />
      <WhyChooseSection />
      <PopularCoursesSection />
      <DirectorTestimonialSection />
      <ParentTestimonialsSection />
      <CTASuccessSection />
    </div>
  );
}
