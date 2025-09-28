import { assets } from '@/assets';
import Image from 'next/image';

const features = [
  {
    icon: () => (
      <Image
        src={assets.understandingIcon}
        alt='Understand Icon'
        width={48}
        height={48}
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
        src={assets.flexibleIcon}
        alt='Flexible Icon'
        width={48}
        height={48}
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
        src={assets.supportIcon}
        alt='Support Icon'
        width={48}
        height={48}
        className='object-contain'
      />
    ),
    title: 'Ongoing Support',
    description: 'Need Help? You can reach out anytime- before or after class.',
  },
  {
    icon: () => (
      <Image
        src={assets.pcIcon}
        alt='PC Icon'
        width={48}
        height={48}
        className='object-contain'
      />
    ),
    title: 'Replay Anytime',
    description: 'Use recorded lessons and note to revise at your own space.',
  },
];

export default function EducationalFeatures() {
  return (
    <section className='py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left text section */}
          <div className='space-y-6 lg:pr-8'>
            <div className='space-y-4'>
              <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight'>
                Check Out Our Educational Features
              </h2>
              <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg'>
                Because we deliver expert tutors, small-group classes, and
                proven results, all online, flexible, and focused on your
                child's success.
              </p>
            </div>
          </div>

          {/* Right grid section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-lg p-6 shadow border border-gray-200 flex items-start space-x-4'
              >
                {/* Icon inside circle */}
                <div className='flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center '>
                  <feature.icon />
                </div>

                {/* Text */}
                <div className='flex-1'>
                  <h3 className='text-base font-semibold text-blue-700 leading-snug'>
                    {feature.title}
                  </h3>
                  <p className='text-[11px] lg:text-[12px] text-gray-600 leading-[1.3]'>
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
