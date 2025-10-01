'use client';

import { assets } from '@/assets';
import { Card } from '@/components/ui/card';
import { ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const parentTestimonials = [
  {
    id: 1,
    name: 'CHARLES NEEDLES',
    content:
      'Master every subject with expert guidance and proven strategies to achieve top grades',
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 2,
    name: 'DCN. MUYIWA',
    content:
      'Master every subject with expert guidance and proven strategies to achieve top grades',
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 3,
    name: 'ENIOLA',
    content:
      'Master every subject with expert guidance and proven strategies to achieve top grades',
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 4,
    name: 'SARAH JOHNSON',
    content:
      'The personalized approach at Ripples Tutorials made all the difference for my daughter. She went from struggling to achieving top grades.',
    rating: 5,
    image: assets.testimonials,
  },
  {
    id: 5,
    name: 'MICHAEL CHEN',
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const maxIndex = parentTestimonials.length - cardsPerView;
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
    <section className='py-16 lg:py-24 bg-white relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/5 via-transparent to-neutral-50 pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-12 lg:mb-20'>
          <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[color:var(--brand-blue)]/10 mb-6'>
            <Quote className='h-8 w-8 sm:h-10 sm:w-10 text-[color:var(--brand-blue)]' />
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[color:var(--brand-blue)] mb-6 text-balance leading-[1.1]'>
            What Parents Are Saying
          </h2>
          <p className='text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
            Hear from parents who have seen their children thrive with our
            personalized tutoring approach
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className='relative max-w-7xl mx-auto'>
          <div className='overflow-hidden rounded-2xl'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
            >
              {parentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='flex-shrink-0 px-2 sm:px-3 lg:px-4'
                  style={{ width: `${cardWidth}%` }}
                >
                  <Card className='group relative p-6 sm:p-8 lg:p-10 h-full bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-50 border-2 border-neutral-200/50 hover:border-[color:var(--brand-blue)]/30 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
                    {/* Quote decoration */}
                    <div className='absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300'>
                      <Quote className='h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-[color:var(--brand-blue)]' />
                    </div>

                    {/* Stars */}
                    <div className='flex gap-1 mb-6'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-300'
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className='text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-8 relative z-10'>
                      "{testimonial.content}"
                    </p>

                    {/* Profile */}
                    <div className='flex items-center gap-4 relative z-10'>
                      <div className='relative'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)] to-[color:var(--brand-accent)] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
                        <Image
                          src={testimonial.image || '/placeholder.svg'}
                          alt={testimonial.name}
                          className='relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300'
                        />
                      </div>
                      <div>
                        <h4 className='font-bold text-sm sm:text-base lg:text-lg text-[color:var(--brand-blue)] group-hover:text-[color:var(--brand-accent)] transition-colors duration-300'>
                          {testimonial.name}
                        </h4>
                        <p className='text-xs sm:text-sm text-neutral-500'>
                          Parent
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className='flex justify-center gap-4 mt-8 lg:mt-12'>
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className='w-12 h-12 sm:w-14 sm:h-14 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
            >
              <ChevronRight className='h-5 w-5 sm:h-6 sm:w-6 rotate-180' />
            </button>
            <button
              onClick={nextSlide}
              disabled={
                isTransitioning ||
                currentIndex === parentTestimonials.length - cardsPerView
              }
              className='w-12 h-12 sm:w-14 sm:h-14 bg-[color:var(--brand-blue)] text-white rounded-full flex items-center justify-center hover:bg-[color:var(--brand-blue)]/90 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
            >
              <ChevronRight className='h-5 w-5 sm:h-6 sm:w-6' />
            </button>
          </div>

          {/* Progress Dots */}
          <div className='flex justify-center gap-2 mt-6'>
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
                    ? 'w-8 bg-[color:var(--brand-blue)]'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
