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
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Image with Decorative Circle */}
          <div className='relative'>
            <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-80 z-0'></div>
            <div className='relative z-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group'>
              <Image
                src={assets.whyUs}
                alt='Students collaborating in classroom'
                className='w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500'
              />
            </div>
          </div>

          {/* Right Content */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-black leading-tight mb-6'>
                Why Choose Ripples Tutorials?
              </h2>
              <p className='text-gray-600 text-lg leading-relaxed'>
                At Ripples, we focus on what truly helps students succeed –
                clear teaching, real support, and flexible learning designed for
                your pace. Here's what makes us different:
              </p>
            </div>

            {/* Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-center space-x-3 group'>
                  <div className='flex-shrink-0'>
                    <div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300'>
                      <Check className='h-4 w-4 text-blue-600' />
                    </div>
                  </div>
                  <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium'>
              LEARN MORE
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
