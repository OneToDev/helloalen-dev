import React from 'react'
import Image from "next/image";

import { Metadata } from "next";
import Link from 'next/link';
import { Github, Instagram, Linkedin, } from 'lucide-react';

export const metadata: Metadata = {
  title: "Get In Touch! | Lorem ipsum dolor sit amet consectetur.",
  description: "Lorem ipsum dolor sit amet consectetur.",
}

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-white dark:bg-[#252525]">
      {/* <Image
        src='/Logo.png'
        height={60}
        width={60}
        className='object-contain dark:hidden h-14 w-14'
        alt='Logo'
      />
      <Image
        src='/Logo-Dark.png'
        height={60}
        width={60}
        className='object-contain hidden dark:block'
        alt='Logo'
      /> */}
      <div className="flex flex-col gap-3 items-center justify-center max-w-xl">
        <p>Hello 👋🏻, Lorem ipsum dolor sit amet consectetur.</p>
        <h1 className="text-center font-bold text-5xl">Get In Touch!</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sagittis facilisi urna ultrices risus.Ultrices nisl enim amet ornare eu a felis accumsan. Nisi natoque est lorem eget facilisis.</p>
        <p>Let's connect with me on below 👇🏻</p>
      </div>
      <div className="flex gap-8">
        <Link href='https://instagram.com/amoebajelek_' target='_blank'>
        <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-md border border-solid border-maGray dark:border-none shadow-sm">
            <Instagram className='md:w-8 h-6 md:h-8' />
          </div>
        </Link>
        <Link href='https://linkedin.com/in/naufalabdussyakur' target='_blank'>
          <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-md border border-solid border-maGray dark:border-none shadow-sm">
            <Linkedin className='md:w-8 h-6 md:h-8' />
          </div>
        </Link>
        <Link href='https://github.com/amoebajelek' target='_blank'>
          <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-md border border-solid border-maGray dark:border-none shadow-sm">
            <Github className='md:w-8 h-6 md:h-8' />
          </div>
        </Link>
      </div>
    </main>
  )
}
