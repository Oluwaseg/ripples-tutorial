import { assets } from '@/assets';
import Image from 'next/image';

const features = [
  {
    icon: () => (
      <Image
        src={assets.understandingIcon || '/placeholder.svg'}
        alt='Understand Icon'
        width={56}
        height={56}
        className='object-contain'
      />
    ),
    title: 'Understand Better',
    description:
      'Understand each topic with simple explanation and expert tutors.',
  },
  {
    icon: () => (
      <Image
        src={assets.flexibleIcon || '/placeholder.svg'}
        alt='Flexible Icon'
        width={56}
        height={56}
        className='object-contain'
      />
    ),
    title: 'Flexible Scheduling',
    description:
      'Pick class time that work around your school and life routine.',
  },
  {
    icon: () => (
      <Image
        src={assets.supportIcon || '/placeholder.svg'}
        alt='Support Icon'
        width={56}
        height={56}
        className='object-contain'
      />
    ),
    title: 'Ongoing Support',
    description: 'Need Help? You can reach out anytime- before or after class.',
  },
  {
    icon: () => (
      <Image
        src={assets.pcIcon || '/placeholder.svg'}
        alt='PC Icon'
        width={56}
        height={56}
        className='object-contain'
      />
    ),
    title: 'Replay Anytime',
    description: 'Use recorded lessons and note to revise at your own space.',
  },
];

export default function EducationalFeatures() {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-br from-primary via-white to-primary'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left text section */}
          <div className='space-y-8 lg:pr-12'>
            <div className='space-y-6'>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] text-balance'>
                Check Out Our Educational Features
              </h2>
              <p className='text-lg lg:text-xl text-neutral-800/80 leading-relaxed max-w-xl'>
                Because we deliver expert tutors, small-group classes, and
                proven results, all online, flexible, and focused on your
                child's success.
              </p>
            </div>
          </div>

          {/* Right grid section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl hover:border-[color:var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1'
              >
                {/* Icon */}
                <div className='mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                  <feature.icon />
                </div>

                {/* Text */}
                <div className='space-y-3'>
                  <h3 className='text-xl font-bold text-[color:var(--brand-blue)] leading-tight'>
                    {feature.title}
                  </h3>
                  <p className='text-sm lg:text-base text-neutral-800/70 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
