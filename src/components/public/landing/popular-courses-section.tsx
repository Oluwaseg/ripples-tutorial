'use client';

import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Brain,
  Calculator,
  CheckCircle,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const allCourses = [
  {
    id: 1,
    icon: Brain,
    title: 'Holiday Booster Courses',
    description:
      'Intensive short-term sessions to revise and stay ahead during school breaks',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'A-Level Excellence Classes',
    description:
      'Comprehensive courses designed to prepare students for academic and career success',
    gradient: 'from-blue-400 to-indigo-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    icon: Calculator,
    title: 'GCSE Success Programme',
    description:
      'Master every subject with expert guidance and proven strategies to achieve top grades',
    gradient: 'from-pink-400 to-rose-500',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Plus Preparation 11',
    description:
      'Targeted lessons to boost confidence and ensure grammar school admission',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 5,
    icon: BookOpen,
    title: 'KS3 Foundation Building',
    description:
      'Strengthen fundamentals in Maths, English, and Science for future academic success',
    gradient: 'from-purple-400 to-violet-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 6,
    icon: Lightbulb,
    title: 'Advanced Mathematics',
    description:
      'Intensive short-term sessions to revise and stay ahead during school breaks',
    gradient: 'from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section className='py-16 lg:py-24 bg-gradient-to-br from-accent via-white to-accent overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16'>
          {/* Left Content */}
          <div className='space-y-6 lg:space-y-8'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[color:var(--brand-blue)] leading-[1.1] text-balance'>
              Our Most Popular Online Courses
            </h2>
            <p className='text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed'>
              Explore our most popular programs designed to help students
              achieve academic excellence.
            </p>
            <Button className='bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)]/90 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group'>
              ENROLL NOW
              <ChevronRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Button>
          </div>

          {/* Right - Navigation for desktop */}
          {/* <div className='hidden lg:flex justify-end gap-4'>
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className='w-14 h-14 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
            >
              <ChevronRight className='h-6 w-6 rotate-180' />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === allCourses.length - cardsPerView
              }
              className='w-14 h-14 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          </div> */}
        </div>

        {/* Course Cards Slider */}
        <div className='relative'>
          <div className='overflow-hidden rounded-2xl'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
            >
              {allCourses.map((course) => {
                const IconComponent = course.icon;

                return (
                  <div
                    key={course.id}
                    className='flex-shrink-0 px-2 sm:px-3 lg:px-4'
                    style={{ width: `${cardWidth}%` }}
                  >
                    <div className='group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-neutral-200/50 hover:border-[color:var(--brand-blue)]/30 h-full'>
                      {/* Gradient accent bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${course.iconBg}`}
                      >
                        <IconComponent
                          className={`h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ${course.iconColor}`}
                        />
                      </div>

                      {/* Content */}
                      <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-[color:var(--brand-blue)] mb-3 sm:mb-4 leading-tight'>
                        {course.title}
                      </h3>
                      <p className='text-sm sm:text-base text-neutral-600 leading-relaxed'>
                        {course.description}
                      </p>

                      {/* Hover arrow */}
                      <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                        <ChevronRight
                          className={`h-6 w-6 ${course.iconColor}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          {/* <div className='flex lg:hidden justify-center gap-4 mt-8'>
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className='w-12 h-12 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg'
            >
              <ChevronRight className='h-5 w-5 rotate-180' />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === allCourses.length - cardsPerView
              }
              className='w-12 h-12 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div> */}

          {/* Progress Dots */}
          <div className='flex justify-center gap-2 mt-6'>
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
                      ? 'w-8 bg-[color:var(--brand-blue)]'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
