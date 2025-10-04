"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Brain,
  Calculator,
  CheckCircle,
  ChevronRight,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const allCourses = [
  {
    id: 1,
    icon: Brain,
    title: "Holiday Booster Courses",
    description:
      "Intensive short-term sessions to revise and stay ahead during school breaks",
    gradient: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "bg-amber-500",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "A-Level Excellence Classes",
    description:
      "Comprehensive courses designed to prepare students for academic and career success",
    gradient: "from-blue-400 to-indigo-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "bg-blue-500",
  },
  {
    id: 3,
    icon: Calculator,
    title: "GCSE Success Programme",
    description:
      "Master every subject with expert guidance and proven strategies to achieve top grades",
    gradient: "from-pink-400 to-rose-500",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    accentColor: "bg-pink-500",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Plus Preparation 11",
    description:
      "Targeted lessons to boost confidence and ensure grammar school admission",
    gradient: "from-emerald-400 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "bg-emerald-500",
  },
  {
    id: 5,
    icon: BookOpen,
    title: "KS3 Foundation Building",
    description:
      "Strengthen fundamentals in Maths, English, and Science for future academic success",
    gradient: "from-purple-400 to-violet-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "bg-purple-500",
  },
  {
    id: 6,
    icon: Lightbulb,
    title: "Advanced Mathematics",
    description:
      "Intensive short-term sessions to revise and stay ahead during school breaks",
    gradient: "from-cyan-400 to-blue-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    accentColor: "bg-cyan-500",
  },
];

export default function PopularCoursesSection() {
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
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning, direction, currentIndex, cardsPerView]);

  const autoSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const maxIndex = allCourses.length - cardsPerView;

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
    const maxIndex = allCourses.length - cardsPerView;
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

  const cardWidth = 100 / cardsPerView;

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary via-accent to-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                MOST POPULAR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] text-balance">
              Our Most Popular{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Online Courses</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -rotate-1" />
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              Explore our most popular programs designed to help students
              achieve academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-white hover:bg-white/90 text-primary px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                ENROLL NOW
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Stats */}
              <div className="flex items-center gap-6 text-white">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {allCourses.length}+
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">Courses</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">1000+</p>
                  <p className="text-xs sm:text-sm text-white/80">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Navigation for desktop */}
          <div className="hidden lg:flex lg:col-span-5 justify-end items-center gap-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className="w-14 h-14 xl:w-16 xl:h-16 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === allCourses.length - cardsPerView
              }
              className="w-14 h-14 xl:w-16 xl:h-16 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Course Cards Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
            >
              {allCourses.map((course) => {
                const IconComponent = course.icon;

                return (
                  <div
                    key={course.id}
                    className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                    style={{ width: `${cardWidth}%` }}
                  >
                    <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-neutral-200/50 hover:border-transparent h-full overflow-hidden">
                      {/* Gradient accent bar - now thicker and more visible */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${course.gradient}`}
                      />

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${course.gradient} opacity-10 rounded-bl-full`}
                        />
                      </div>

                      {/* Icon with enhanced styling */}
                      <div className="relative mb-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                        />
                        <div
                          className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${course.iconBg}`}
                        >
                          <IconComponent
                            className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 ${course.iconColor}`}
                          />
                        </div>

                        {/* Sparkle icon on hover */}
                        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                          <Sparkles className={`h-5 w-5 ${course.iconColor}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                        {course.description}
                      </p>

                      {/* Learn more link with arrow */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span
                          className={`text-sm font-semibold ${course.iconColor}`}
                        >
                          Learn more
                        </span>
                        <ChevronRight
                          className={`h-5 w-5 ${course.iconColor} group-hover:translate-x-1 transition-transform`}
                        />
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 ${course.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === allCourses.length - cardsPerView
              }
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Dots - Enhanced */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: allCourses.length - cardsPerView + 1 }).map(
              (_, index) => (
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
                      ? "w-8 sm:w-10 bg-white shadow-lg"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
