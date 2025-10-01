'use client';

import { assets } from '@/assets';
import ConfidenceSection from '@/components/public/landing/confidence-section';
import CTASuccessSection from '@/components/public/landing/cta-success-section';
import DirectorTestimonialSection from '@/components/public/landing/director-testimonial-section';
import Dreams from '@/components/public/landing/dreams';
import EducationalFeatures from '@/components/public/landing/educational-features';
import ParentTestimonialsSection from '@/components/public/landing/parent-testimonials-section';
import PopularCoursesSection from '@/components/public/landing/popular-courses-section';
import WhyChooseSection from '@/components/public/landing/why-choose-section';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Video Background */}
      <section className='relative h-[50vh] md:h-screen overflow-hidden'>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src={assets.hero} type='video/mp4' />
          {/* Fallback image if video doesn't load */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900' />
        </video>

        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/30' />
        {/* Watch Full Video Button */}
        <Button
          onClick={() => setIsVideoModalOpen(true)}
          className='absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-wide flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105'
        >
          <Play className='w-3 h-3 md:w-4 md:h-4' />
          WATCH FULL VIDEO
        </Button>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'>
          <div className='relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden'>
            {/* Close Button */}
            <Button
              onClick={() => setIsVideoModalOpen(false)}
              variant='ghost'
              size='icon'
              className='absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full'
            >
              <X className='w-6 h-6' />
            </Button>

            {/* Full Video */}
            <video controls autoPlay className='w-full h-full'>
              <source src={assets.hero} type='video/mp4' />
              <p className='text-white p-8'>
                Your browser does not support the video tag.
              </p>
            </video>
          </div>
        </div>
      )}

      <Dreams />
      <ConfidenceSection />
      <EducationalFeatures />
      <WhyChooseSection />
      <PopularCoursesSection />
      <DirectorTestimonialSection />
      <ParentTestimonialsSection />
      <CTASuccessSection />
    </div>
  );
}
