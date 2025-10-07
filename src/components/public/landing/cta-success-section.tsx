import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function CTASuccessSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div
          className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 min-h-[320px] sm:min-h-[380px] lg:min-h-[480px]"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0">
            <Image
              src={assets.cta || "/placeholder.svg"}
              alt="Student giving thumbs up"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60" />

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24 h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[480px]">
            {/* Floating badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 mb-6 animate-bounce [animation-duration:3s]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-primary-foreground">
                Join 1000+ Successful Students
              </span>
            </div>

            {/* Main Heading with decorative elements */}
            <div className="relative mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-2 leading-tight text-balance"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Your Child's Success
                <br />
                <span className="relative inline-block">
                  Starts Here!
                  <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent rounded-full" />
                </span>
              </h2>

              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50 rounded-br-lg" />
            </div>

            {/* Subtitle with icon */}
            <div
              className="flex items-center justify-center gap-2 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/95 leading-relaxed text-pretty max-w-2xl">
                Explore our most popular programs designed to help students
                achieve academic excellence.
              </p>
            </div>

            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary-foreground rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <Button className="relative bg-primary-foreground text-primary hover:bg-primary-foreground/95 transition-all duration-300 px-12 sm:px-16 lg:px-20 py-5 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg font-bold rounded-full flex items-center gap-3 transform group-hover:scale-105 shadow-2xl">
                ENROLL NOW
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Stats indicator */}
            <div
              className="flex items-center gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Success Rate
                </div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Happy Students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
