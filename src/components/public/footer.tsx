import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-[#1a2332] text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div className='space-y-6'>
            <div className='flex items-center'>
              <img
                src='/images/logo.png'
                alt='Ripples Tutorials'
                className='h-8 w-auto'
              />
            </div>
            <p className='text-gray-300 leading-relaxed max-w-sm'>
              A place where excellence meets opportunity, and where every
              learner is guided to reach their fullest potential.
            </p>
            <div className='flex space-x-4'>
              <div className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors cursor-pointer'>
                <Facebook className='h-5 w-5 text-gray-300 hover:text-blue-400 transition-colors' />
              </div>
              <div className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors cursor-pointer'>
                <Twitter className='h-5 w-5 text-gray-300 hover:text-blue-400 transition-colors' />
              </div>
              <div className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors cursor-pointer'>
                <Linkedin className='h-5 w-5 text-gray-300 hover:text-blue-400 transition-colors' />
              </div>
              <div className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors cursor-pointer'>
                <Instagram className='h-5 w-5 text-gray-300 hover:text-blue-400 transition-colors' />
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className='space-y-6'>
            <h4 className='text-xl font-semibold text-white'>Useful Links</h4>
            <ul className='space-y-4 text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  How it Works
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className='space-y-6'>
            <h4 className='text-xl font-semibold text-white'>Subscribe Now</h4>
            <p className='text-gray-300 leading-relaxed'>
              Don't miss our future updates! Get Subscribed Today!
            </p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input
                type='email'
                placeholder='Your mail here'
                className='flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
              <button className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors'>
                <Mail className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-red-500 py-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-white text-sm'>
            ©2025. ripplestutorials. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
