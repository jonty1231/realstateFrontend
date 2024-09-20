'use client'

import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link'
export default function Footer() {
  return (
    <>
      <footer className="w-full overflow-x-hidden bg-cover bg-center pt-[40px]" style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}>
      <div className='container mx-auto px-4 p sm:px-8 lg:px-[6.5rem]'>

        <div className='grid grid-cols-2 py-2 sm:grid-cols-2 border-b border-[#ffffff1a] my-[20px]'>
          <div className='flex items-center sm:mb-0'>
            <Image src="/images/logos.png" className="logo w-[150px] lg:w-[200px]  filter brightness-600 " width={40} height={40} alt="Logo" />
          </div>
          <div className='social-icons flex items-center justify-end gap-4 text-2xl text-white'>
            <FaFacebookF className='w-5 h-5' />
            <FaXTwitter className='w-5 h-5' />
            <FaInstagram className='w-5 h-5' />
            <CiLinkedin className='w-5 h-5' />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-20 border-b border-[#ffffff1a]'>
          <div className='flex flex-wrap justify-between'>
            <div className='mb-8 sm:mb-4  max-sm:w-[40%]'>
              <h6 className='mb-[25px] text-white font-semibold text-[15px]'>
                Popular Link
              </h6>
              <ul className='text-[#bebdbd] flex flex-col gap-5 text-lg'>
                <li>
                  <Link href='/'>
                    Apartment for Rent
                  </Link>
                </li>
                <li>Apartment for Rent</li>
                <li>Apartment for Rent</li>
                <li>Apartment for Rent</li>
              </ul>
            </div>
             <div className='mb-8 sm:mb-4  max-sm:w-[40%] '>
              <h6 className='mb-[25px] text-white font-semibold text-[15px]'>
                Quick Links
              </h6>
              <ul className='text-[#bebdbd] flex flex-col gap-5 text-lg'>
                <li><Link href='/terms-and-condition'>Terms of Use</Link></li>
                <li> <Link href='/privacy-policy'>Privacy Policy</Link></li>
                <li> <Link href='/about'>Our Services</Link></li>
                <li> <Link href='/contact'>Contact Support</Link></li>
              </ul>
            </div>
            <div className='mb-8 sm:mb-4  max-sm:w-[40%]'>
              <h6 className='mb-[25px] text-white font-semibold text-[15px]'>
                Discover
              </h6>
              <ul className='text-[#bebdbd] flex flex-col gap-5 text-lg'>
                <li>Miami</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>New York</li>
              </ul>
            </div>

            <div className='mb-8 block lg:hidden max-sm:w-[50%]' >
          
              <div className='flex flex-col text-white'>
                <p className='text-[#bebdbd] text-lg my-2'>
                  Need Live Support?
                </p>
                <h6 className='font-semibold text-xl'>
                  hi@trc.com
                </h6>
              </div>
            </div>

          </div>

          <div className='ml-[0%]  sm:ml-[22.66666667%] px-8 lg:ml-0'>
            <div className='relative mb-2 flex flex-wrap justify-around'>
              <div className='flex flex-col  lg:block  text-white mb-8'>
                <p className='text-[#bebdbd] text-lg my-2  '>
                  Total Free Customer Care
                </p>
                <h6 className='font-semibold text-xl '>
                  +(0) 123 050 945 02
                </h6>
              </div>
              <div className='flex flex-col  lg:block text-white'>
                <p className='text-[#bebdbd] text-lg my-2'>
                  Need Live Support?
                </p>
                <h6 className='font-semibold text-xl'>
                  hi@trc.com
                </h6>
              </div>
            </div>

            <div className='flex flex-col text-white mb-[3rem]'>
              <h6 className='text-white font-semibold mb-[20px] text-[20px]'>
                Keep Yourself Up to Date
              </h6>
              <div className='inp-box relative'>
                <input type='email' placeholder='Email' className='h-[70px] pl-[25px] px-4 py-2 w-full text-slate-800 font-[500] rounded-[20px] border-none focus:no-underline' />
                <button className='absolute right-[25px] top-[20px] font-semibold text-[#181a20] bg-transparent border-none text-[20px]'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='py-4'>
      

          <div className='flex flex-col lg:flex-row text-nowrap justify-between'>
            <p className='text-white mb-2 font-semibold sm:mb-0'>
            Copyright ©  <span className='text-white'></span> 2024 Tricity Real State (TRS)
            </p>
            <p className='text-white mb-2 sm:mb-0 font-semibold'>

              <Link href="https://www.futuretouch.in/" target="_blank" >
              Desgin by ❤️ Future IT Touch Pvt. Ltd
              </Link>

            </p>
            <p className='text-white font-semibold'>
              Privacy · Terms · Sitemap
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
