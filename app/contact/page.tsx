import { Github, Instagram, Linkedin, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Profile from "@/public/Profile-Alen.png";

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-6 items-center justify-center bg-white dark:bg-[#252525]">
      <div className="flex flex-col gap-3 items-center justify-center max-w-xl text-center px-5"></div>
      <Image src={Profile} alt="Profile" />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-5xl">Get In Touch!</h1>
        <p>Let&apos;s connect with me on below 👇🏻</p>
      </div>
      <div className="flex gap-4">
        <Link href="https://instagram.com/amoebajelek_" target="_blank">
          <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-sm border border-solid border-maGray dark:border-none shadow-sm">
            <Instagram className="md:w-6 md:h-6" />
          </div>
        </Link>
        <Link href="https://linkedin.com/in/naufalabdussyakur" target="_blank">
          <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-sm border border-solid border-maGray dark:border-none shadow-sm">
            <Linkedin className="md:w-6 md:h-6" />
          </div>
        </Link>
        <Link href="https://github.com/amoebajelek" target="_blank">
          <div className="px-3 py-3 bg-white dark:bg-maDarkGray hover:bg-maBlack dark:hover:bg-maOrange text-maDarkGray dark:text-white hover:text-maOrange rounded-sm border border-solid border-maGray dark:border-none shadow-sm">
            <Github className="md:w-6 md:h-6" />
          </div>
        </Link>
      </div>
    </main>
  );
}
