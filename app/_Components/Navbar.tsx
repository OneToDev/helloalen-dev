'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { DoorOpen, GalleryHorizontalEnd, Share2 } from 'lucide-react'
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <div className="fixed h-fit md:min-h-screen w-full md:w-fit flex md:flex-col bg-transparent dark:bg-maBlack justify-center">
      <div className='h-fit w-full md:w-[100px] py-5 md:py-8 px-8 md:ps-8 md:pe-3 flex md:flex-col justify-between md:gap-8 bg-maBlack dark:bg-white md:rounded-tr-3xl rounded-bl-3xl md:rounded-bl-none rounded-br-3xl'>
        <Link href="/">
          {/* <Image src={LogoDark} alt='Logo' className='w-12 md:w-14 h-12 md:h-14' /> */}
          <Image
            src='/Logo-Dark.png'
            height={60}
            width={60}
            className='dark:hidden w-12 md:w-14 h-12 md:h-14'
            alt='Logo'
          />
          <Image
            src='/Logo.png'
            height={60}
            width={60}
            className='hidden dark:block w-12 md:w-14 h-12 md:h-14'
            alt='Logo'
          />
        </Link>
        <div className='flex md:flex-col gap-8 items-center md:items-start'>
          <Link href="/" className='flex flex-col justify-center'>
            <DoorOpen className={currentRoute == '/' ? 'text-maOrange w-6 md:w-8 h-6 md:h-8' : 'text-maGray w-6 md:w-8 h-6 md:h-8'} />
          </Link>
          <Link href="/portofolios" className='flex flex-col justify-center'>
            <GalleryHorizontalEnd className={currentRoute == '/portofolios' ? 'text-maOrange w-6 md:w-8 h-6 md:h-8' : 'text-maGray w-6 md:w-8 h-6 md:h-8'} />
          </Link>
          <Link href="/contact" className='flex flex-col justify-center'>
            <Share2 className={currentRoute == '/contact' ? 'text-maOrange w-6 md:w-8 h-6 md:h-8' : 'text-maGray w-6 md:w-8 h-6 md:h-8'} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
