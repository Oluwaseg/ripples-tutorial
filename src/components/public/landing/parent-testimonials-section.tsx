"use client";

import { assets } from "@/assets";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const parentTestimonials = [
  {
    id: 1,
    name: "CHARLSE NEEDLES",
    content:
      "Master every subject with expert guidance and proven strategies to achieve top grades",
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 2,
    name: "DCN. MUYIWA",
    content:
      "Master every subject with expert guidance and proven strategies to achieve top grades",
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 3,
    name: "ENIOLA",
    content:
      "Master every subject with expert guidance and proven strategies to achieve top grades",
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 4,
    name: "SARAH JOHNSON",
    content:
      "The personalized approach at Ripples Tutorials made all the difference for my daughter. She went from struggling to achieving top grades.",
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 5,
    name: "MICHAEL CHEN",
    content:
      "Exceptional tutoring service that truly cares about each student's success. Highly recommend to all parents.",
    rating: 5,
    image: assets.testimonials,
  },
];

export default function ParentTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        autoSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning, direction, currentIndex, cardsPerView]);

  const autoSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const maxIndex = parentTestimonials.length - cardsPerView;

    if (direction === 1) {
      if (currentIndex >= maxIndex) {
        setDirection(-1);
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex <= 0) {
        setDirection(1);
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/20 to-accent/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div
          className="text-center mb-12 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {/* Floating badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent">
              Trusted by 1000+ Parents
            </span>
          </div>

          {/* Quote icon with decorative ring */}
          <div
            className="relative inline-flex items-center justify-center mb-6"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
              <Quote className="h-10 w-10 text-primary" />
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-6 text-balance leading-[1.1]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What Parents Are{" "}
            <span className="relative inline-block">
              Saying
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
            </span>
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Hear from parents who have seen their children thrive with our
            personalized tutoring approach
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {parentTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{ width: `${cardWidth}%` }}
                >
                  <Card
                    className="group relative p-6 sm:p-8 lg:p-10 h-full bg-card hover:bg-gradient-to-br hover:from-card hover:to-muted/50 border-2 border-border hover:border-primary/30 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100 + 200}`}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Quote decoration */}
                    <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <Quote className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-primary" />
                    </div>

                    {/* Stars with enhanced styling */}
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Star
                            className="relative h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-8 relative z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Profile with enhanced styling */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base lg:text-lg text-primary group-hover:text-accent transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Parent
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-accent to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: parentTestimonials.length - cardsPerView + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary shadow-lg shadow-primary/50"
                    : "w-2 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
