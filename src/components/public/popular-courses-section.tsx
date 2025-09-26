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
    bgColor: 'bg-yellow-100',
    borderColor: 'border-orange-400',
    iconBg: 'bg-yellow-200',
    iconColor: 'text-yellow-800',
    highlighted: true,
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'A-Level Excellence Classes',
    description:
      'Comprehensive courses designed to prepare students for academic and career success',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-200',
    iconColor: 'text-blue-800',
    highlighted: false,
  },
  {
    id: 3,
    icon: Calculator,
    title: 'GCSE Success Programme',
    description:
      'Master every subject with expert guidance and proven strategies to achieve top grades',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-200',
    iconBg: 'bg-pink-200',
    iconColor: 'text-pink-800',
    highlighted: false,
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Plus Preparation 11',
    description:
      'Targeted lessons to boost confidence and ensure grammar school admission',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-200',
    iconColor: 'text-green-800',
    highlighted: false,
  },
  {
    id: 5,
    icon: BookOpen,
    title: 'KS3 Foundation Building',
    description:
      'Strengthen fundamentals in Maths, English, and Science for future academic success',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-200',
    iconColor: 'text-purple-800',
    highlighted: false,
  },
  {
    id: 6,
    icon: Lightbulb,
    title: 'Advanced Mathematics',
    description:
      'Intensive short-term sessions to revise and stay ahead during school breaks',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-200',
    iconBg: 'bg-indigo-200',
    iconColor: 'text-indigo-800',
    highlighted: false,
  },
];

export default function PopularCoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

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

    const maxIndex = allCourses.length - 3; // Since we show 3 cards at once

    if (direction === 1) {
      // Moving forward
      if (currentIndex >= maxIndex) {
        // Reached the end, reverse direction
        setDirection(-1);
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      // Moving backward
      if (currentIndex <= 0) {
        // Reached the beginning, reverse direction
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
    const maxIndex = allCourses.length - 3;
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

  const getVisibleCourses = () => {
    const courses = [];
    for (let i = 0; i < 3; i++) {
      const index = currentIndex + i;
      if (index < allCourses.length) {
        courses.push({ ...allCourses[index], position: i });
      }
    }
    return courses;
  };

  const visibleCourses = getVisibleCourses();

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Content */}
          <div className='space-y-6'>
            <h2 className='text-5xl font-bold text-black leading-tight'>
              Our Most Popular Online Courses
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Explore our most popular programs designed to help students
              achieve academic excellence.
            </p>
            <Button className='bg-transparent hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-full text-lg font-medium border-2 border-blue-600 transition-all duration-200'>
              ENROLL NOW
              <ChevronRight className='ml-2 h-5 w-5' />
            </Button>
          </div>

          {/* Right Course Cards */}
          <div className='relative'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-out'
                style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
              >
                {allCourses.map((course, index) => {
                  const IconComponent = course.icon;
                  const isHighlighted = course.highlighted;

                  return (
                    <div key={course.id} className={`flex-shrink-0 w-1/3 px-2`}>
                      <div
                        className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform h-full ${
                          isHighlighted
                            ? `${course.bgColor} border-2 ${course.borderColor} shadow-md`
                            : `${course.bgColor} border ${course.borderColor}`
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${course.iconBg}`}
                        >
                          <IconComponent
                            className={`h-6 w-6 transition-all duration-300 ${course.iconColor}`}
                          />
                        </div>
                        <h3 className='text-lg font-semibold text-black mb-3 leading-tight'>
                          {course.title}
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                          {course.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-4 mt-12'>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:scale-110 disabled:opacity-50'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:scale-110 disabled:opacity-50'
          >
            <ChevronRight className='h-5 w-5 rotate-180' />
          </button>
        </div>
      </div>
    </section>
  );
}
