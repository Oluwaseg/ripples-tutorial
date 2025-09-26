'use client';

import { Quote } from 'lucide-react';

export default function DirectorTestimonialSection() {
  return (
    <section className='py-20 bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left - Director Image */}
            <div className='relative'>
              <div className='w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden '>
                <img
                  src='/images/MR-T.png'
                  alt='MR. T. ABRAHAM'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Right - Quote Content */}
            <div className='text-white space-y-6'>
              <Quote className='h-12 w-12 text-blue-400 mb-6' />
              <blockquote className='text-xl lg:text-2xl leading-relaxed font-light'>
                "At Ripples Tutorials, education is not just about grades – it's
                about building confidence and shaping futures. Our goal is to
                provide an environment where every student feels supported,
                inspired, and ready to excel."
              </blockquote>
              <div className='pt-4'>
                <p className='text-red-400 font-semibold text-lg tracking-wide'>
                  - MR. T. ABRAHAM, DIRECTOR OF STUDIES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
