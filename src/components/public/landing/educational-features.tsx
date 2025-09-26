import { assets } from '@/assets';
import Image from 'next/image';
const features = [
  {
    icon: () => (
      <Image
        src={assets.understandingIcon}
        alt='Understand Icon'
        width={64}
        height={64}
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
        width={64}
        height={64}
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
        width={64}
        height={64}
      />
    ),
    title: 'Ongoing Support',
    description: 'Need Help? You can reach out anytime- before or after class.',
  },
  {
    icon: () => (
      <Image src={assets.pcIcon} alt='PC Icon' width={64} height={64} />
    ),
    title: 'Replay Anytime',
    description: 'Use recorded lessons and note to revise at your own space.',
  },
];

export default function EducationalFeatures() {
  return (
    <section className='py-16 lg:py-20 bg-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left text section */}
          <div className='space-y-6'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
              Check Out Our Educational Features
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Because we deliver expert tutors, small-group classes, and proven
              results, all online, flexible, and focused on your child's
              success.
            </p>
          </div>

          {/* Right grid section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0  mt-1'>
                    <feature.icon />
                  </div>
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-base font-semibold text-blue-600 leading-tight whitespace-nowrap'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
