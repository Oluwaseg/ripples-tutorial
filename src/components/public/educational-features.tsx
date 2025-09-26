import { Calendar, Headphones, Laptop, Settings } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Understand Better',
    description:
      'Understand each topic with simple explanation and expert tutors.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description:
      'Pick class time that work around your school and life routine.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Need Help? You can reach out anytime- before or after class.',
  },
  {
    icon: Laptop,
    title: 'Replay Anytime',
    description: 'Use recorded lessons and note to revise at your own space.',
  },
];

export default function EducationalFeatures() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-black leading-tight'>
              Check Out Our Educational Features
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Because we deliver expert tutors, small-group classes, and proven
              results, all online, flexible, and focused on your child's
              success.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group'
              >
                <div className='mb-4'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300'>
                    <feature.icon className='h-6 w-6 text-blue-600' />
                  </div>
                </div>
                <h3 className='text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
