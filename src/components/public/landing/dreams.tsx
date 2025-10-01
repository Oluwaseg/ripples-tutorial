import { assets } from '@/assets';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Dreams() {
  return (
    // <div className='min-h-screen bg-[radial-gradient(at_top_left,_var(--primary)_65%,_var(--background)_2%)]'>
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_var(--primary)_40%,_var(--background)_100%)]'>
      <main className='container mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
              Big Dreams
            </h1>
            <h2 className='text-xl md:text-2xl font-medium text-white'>
              Your Journey Start Here!
            </h2>
            <p className='text-white text-base md:text-lg leading-relaxed'>
              At Ripples Tutorials, we believe in dreaming big and want the same
              for our students. Our mission is to help pupils excel, whether by
              achieving distinctions at GCSEs and A Level, or attaining the
              highest scores in the 11 Plus exams. We are committed to
              supporting every student in reaching their full academic potential
              and turning aspirations into reality. At Ripples Tutorials, we
              believe that if you can dream it, you can achieve it, so start
              your journey with us today.
            </p>
            <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium'>
              LEARN MORE
              <ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5' />
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className='border border-gray-200 rounded-3xl p-3 md:p-4 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300'>
            <div className='space-y-3 md:space-y-4'>
              <div className='rounded-2xl overflow-hidden group cursor-pointer'>
                <Image
                  src={assets.bigDream || '/placeholder.svg'}
                  alt='Child with goggles looking at holographic display'
                  className='w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105'
                  width={600}
                  height={300}
                />
              </div>

              <div className='grid grid-cols-2 gap-3 md:gap-4'>
                <div className='rounded-2xl overflow-hidden group cursor-pointer'>
                  <Image
                    src={assets.bigDream2 || '/placeholder.svg'}
                    alt='Student studying in library'
                    className='w-full h-[100px] md:h-[120px] lg:h-[150px] object-cover transition-transform duration-300 group-hover:scale-105'
                    width={600}
                    height={300}
                  />
                </div>
                <div className='rounded-2xl overflow-hidden group cursor-pointer'>
                  <Image
                    src={assets.bigDream3 || '/placeholder.svg'}
                    alt='Student reading at home'
                    className='w-full h-[100px] md:h-[120px] lg:h-[150px] object-cover transition-transform duration-300 group-hover:scale-105'
                    width={600}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
