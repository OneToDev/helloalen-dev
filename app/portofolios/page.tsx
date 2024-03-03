import React from 'react'
import Image from "next/image";
import Thumbnail from '@/public/Thumbnail.jpg'

import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Portofolios | Find a project that interests you!",
  description: "Find a project that interests you!",
}

export default function page() {
  return (
    <main className="md:ms-[120px] w-full min-h-screen flex flex-col gap-20 bg-white dark:bg-maBlack pt-40 md:pt-32">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-center font-bold text-5xl text-maBlack dark:text-white">Find a project that interests you!</h1>
        <p className='text-maDarkGray dark:text-maGray text-center px-5'>I have completed 193 projects which you can see with the project details</p>
      </div>
      <div className="flex gap-5 px-8">
        <Link href='/portofolios/Bragada.ui'>
          <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-md">
            <figure>
              <Image src={Thumbnail} alt='Thumbnail' />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-3xl font-bold text-maOrange">Bragada.ui</h2>
              <p className='text-maDarkGray'>Designed by <span className='italic font-medium text-maBlack'>Helloalen.dev</span></p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}
