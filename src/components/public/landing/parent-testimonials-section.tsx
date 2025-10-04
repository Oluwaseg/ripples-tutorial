"use client";

import { assets } from "@/assets";
import { Card } from "@/components/ui/card";
import { ChevronRight, Star } from "lucide-react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        autoSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning, direction, currentIndex]);

  const autoSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const maxIndex = parentTestimonials.length - 3; // Show 3 cards at once

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

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const maxIndex = parentTestimonials.length - 3;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setDirection(1);
    }
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setDirection(-1);
    }
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            What Parents Are Saying
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {parentTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-1/3 px-4">
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-orange-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Profile */}
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-black">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === parentTestimonials.length - 3
              }
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
