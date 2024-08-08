"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconMenuDark from "@/public/Icon-Menu-White.png";
import IconMenuLight from "@/public/Icon-Menu-Black.png";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex justify-between bg-transparent px-4 md:px-12 lg:px-96 py-6">
      <Link href="/">
        <h1 className="flex text-2xl font-bold italic">
          Helloalen<p className="text-maOrange">.dev</p>
        </h1>
      </Link>

      {/* Mobile Mode */}
      <div className="md:hidden flex flex-1 justify-end px-2 items-center">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-sm font-base">
              <Image src={IconMenuDark} alt="Menu" width={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-72 p-4 shadow-sm gap-2"
            >
              <li>
                <Link href="/about" className="flex flex-col justify-center">
                  <p
                    className={
                      currentRoute == "/about"
                        ? "text-maOrange font-medium transition-all"
                        : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
                    }
                  >
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex flex-col justify-center">
                  <p
                    className={
                      currentRoute == "/blog"
                        ? "text-maOrange font-medium transition-all"
                        : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
                    }
                  >
                    Blog 🎨
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/get-in-touch"
                  className="flex flex-col justify-center"
                >
                  <p
                    className={
                      currentRoute == "/get-in-touch"
                        ? "text-maOrange font-medium transition-all"
                        : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
                    }
                  >
                    Get in touch!
                  </p>
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Mode */}
      <div className="hidden md:flex flex-row gap-6 text-sm font-base">
        <Link href="/about" className="flex flex-col justify-center">
          <p
            className={
              currentRoute == "/about"
                ? "text-maOrange font-medium transition-all"
                : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
            }
          >
            About
          </p>
        </Link>
        <Link href="/blog" className="flex flex-col justify-center">
          <p
            className={
              currentRoute == "/blog"
                ? "text-maOrange font-medium transition-all"
                : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
            }
          >
            Blog 🎨
          </p>
        </Link>
        <Link href="/get-in-touch" className="flex flex-col justify-center">
          <p
            className={
              currentRoute == "/get-in-touch"
                ? "text-maOrange font-medium transition-all"
                : "text-zinc-600 hover:text-maOrange hover:font-medium dark:text-white transition-all"
            }
          >
            Get in touch!
          </p>
        </Link>
        <ModeToggle />
      </div>
    </div>
    // <div className="fixed h-fit md:min-h-screen w-full md:w-fit flex md:flex-col bg-[#fafafa] dark:bg-maBlack justify-center">
    //   <div className='h-fit w-full p-5 flex md:flex-col justify-between md:gap-8 bg-maBlack dark:bg-white md:rounded-tr-3xl rounded-bl-3xl md:rounded-bl-none rounded-br-3xl'>
    //     <Link href="/">
    //       <Image
    //         src='/Logo-Dark.png'
    //         height={60}
    //         width={60}
    //         className='dark:hidden w-10 h-10'
    //         alt='Logo'
    //       />
    //       <Image
    //         src='/Logo.png'
    //         height={60}
    //         width={60}
    //         className='hidden dark:block w-10 h-10'
    //         alt='Logo'
    //       />
    //     </Link>
    //     <div className='flex md:flex-col gap-8 items-center md:items-start'>
    //       <Link href="/" className='flex flex-col justify-center'>
    //         <DoorOpen className={currentRoute == '/' ? 'text-maOrange w-6 h-6 transition-all' : 'text-maDarkGray w-6 h-6 transition-all'} />
    //       </Link>
    //       <Link href="/portofolios" className='flex flex-col justify-center'>
    //         <GalleryHorizontalEnd className={currentRoute == '/portofolios' ? 'text-maOrange w-6 h-6 transition-all' : 'text-maDarkGray w-6 h-6 transition-all'} />
    //       </Link>
    //       <Link href="/contact" className='flex flex-col justify-center'>
    //         <Share2 className={currentRoute == '/contact' ? 'text-maOrange w-6 h-6 transition-all' : 'text-maDarkGray w-6 h-6 transition-all'} />
    //       </Link>
    //       <ModeToggle />
    //     </div>
    //   </div>
    // </div>
  );
};
