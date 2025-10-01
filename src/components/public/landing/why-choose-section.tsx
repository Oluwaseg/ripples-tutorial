import { assets } from '@/assets';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Everything Online',
  'Real Results',
  'Focused Learning',
  'Trackable Progress',
  'Parental Updates',
  'Student Login History',
];

export default function WhyChooseSection() {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-br from-white via-neutral-50 to-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Image */}
          <div className='relative order-2 lg:order-1'>
            {/* Decorative element */}
            <div className='absolute -bottom-8 -left-8 w-32 h-32 lg:w-40 lg:h-40 bg-[color:var(--brand-blue)] rounded-full opacity-10 blur-2xl' />
            <div className='absolute -top-8 -right-8 w-24 h-24 lg:w-32 lg:h-32 bg-[color:var(--brand-accent)] rounded-full opacity-10 blur-2xl' />

            <div className='relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 group'>
              <div className='absolute inset-0 bg-gradient-to-t from-[color:var(--brand-blue)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10' />
              <Image
                src={assets.whyUs || '/placeholder.svg'}
                alt='Students collaborating in classroom'
                className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>

          {/* Right Content */}
          <div className='space-y-10 order-1 lg:order-2'>
            <div className='space-y-6'>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] text-balance'>
                Why Choose Ripples Tutorials?
              </h2>
              <p className='text-base sm:text-lg lg:text-xl text-neutral-800/70 leading-relaxed'>
                At Ripples, we focus on what truly helps students succeed –
                clear teaching, real support, and flexible learning designed for
                your pace. Here's what makes us different:
              </p>
            </div>

            {/* Features Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 rounded-full bg-[color:var(--brand-blue)]/10 flex items-center justify-center group-hover:bg-[color:var(--brand-blue)] transition-colors duration-300'>
                      <Check className='w-5 h-5 text-[color:var(--brand-blue)] group-hover:text-white transition-colors duration-300' />
                    </div>
                  </div>
                  <span className='text-base lg:text-lg font-semibold text-neutral-800 group-hover:text-[color:var(--brand-blue)] transition-colors duration-300'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button className='bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue-dark)] text-white px-10 py-7 rounded-full text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group'>
              LEARN MORE
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
