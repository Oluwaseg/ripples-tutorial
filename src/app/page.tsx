'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className='relative h-screen overflow-hidden'>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src='/videos/hero-video.mp4' type='video/mp4' />
          {/* Fallback image if video doesn't load */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900' />
        </video>

        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/30' />

        {/* Hero Content */}
        {/* <div className='relative z-10 flex items-center justify-center h-full'>
          <div className='container mx-auto px-4 text-center text-white'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 text-balance'>
              Excellence in Education
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed'>
              Discover a world-class learning environment where students thrive
              academically, socially, and personally in our innovative
              educational community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-bold tracking-wide'
              >
                EXPLORE OUR PROGRAMS
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold tracking-wide bg-transparent'
              >
                BOOK A TOUR
              </Button>
            </div>
          </div>
        </div> */}

        {/* Watch Full Video Button */}
        <Button
          onClick={() => setIsVideoModalOpen(true)}
          className='absolute bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105'
        >
          <Play className='w-4 h-4' />
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
              <source src='/videos/hero-video.mp4' type='video/mp4' />
              <p className='text-white p-8'>
                Your browser does not support the video tag.
              </p>
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
