import { assets } from '@/assets';
import Image from 'next/image';
export default function ConfidenceSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-balance'>
            Helping Students Build Confidence
            <br />- One Class At A Time
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto'>
            Our Online tuition classes are tailored for student success. We
            focus on small group learning, enabling tutors to connect with each
            student, provide real-time feedback, and offer materials like notes,
            videos, and PowerPoint summaries for continued learning after class.
            Parents are kept in the loop through regular communication, making
            us a trusted online school for exam preparation.
          </p>
        </div>

        <div className='mb-20'>
          <div className='relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto group cursor-pointer'>
            <Image
              src={assets.onlineTuition}
              alt='Online tuition teacher with student'
              className='w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500'
            />
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
          <div className='bg-gray-50 rounded-xl p-6 text-center group cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
            <div className='text-4xl md:text-4xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
              4,000+
            </div>
            <div className='text-red-500 font-semibold text-sm tracking-wider group-hover:text-red-600 transition-colors duration-300'>
              ACTIVE LEARNERS
            </div>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 text-center group cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
            <div className='text-4xl md:text-4xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
              96%
            </div>
            <div className='text-red-500 font-semibold text-sm tracking-wider group-hover:text-red-600 transition-colors duration-300'>
              USER SATISFACTION
            </div>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 text-center group cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
            <div className='text-4xl md:text-4xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
              3,679+
            </div>
            <div className='text-red-500 font-semibold text-sm tracking-wider group-hover:text-red-600 transition-colors duration-300'>
              REGISTRATION
            </div>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 text-center group cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
            <div className='text-4xl md:text-4xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
              10+
            </div>
            <div className='text-red-500 font-semibold text-sm tracking-wider group-hover:text-red-600 transition-colors duration-300'>
              COURSE CATEGORY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
