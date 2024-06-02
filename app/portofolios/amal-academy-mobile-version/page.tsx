import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMoveLeft } from "react-icons/lu";
import ThumbnailAmalAcademy from "@/public/Thumbnail_Amal_Acardemy_Mobile_Version.jpg";

export default function page() {
  return (
    <main className="md:ms-[120px] md:me-[20px] w-full min-h-screen flex flex-col gap-8 md:gap-10 bg-[#fafafa] dark:bg-maBlack py-12">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Link
          href="/portofolios"
          className="flex gap-1 items-center text-maDarkGray dark:text-maGray opacity-50 dark:opacity-80"
        >
          <LuMoveLeft />
          <p>Back</p>
        </Link>
        <h1 className="text-center font-extrabold text-5xl text-maBlack dark:text-white">
          Amal Academy (Mobile Version)
        </h1>
        <p className="text-maDarkGray dark:text-maGray">
          Designed by{" "}
          <Link
            href="https://instagram.com/amoebajelek_"
            className="font-medium text-maOrange
        "
            target="_blank"
          >
            Naufal Abdussyakur
          </Link>
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center gap-8">
        <Image
          src={ThumbnailAmalAcademy}
          alt="Thumbnail"
          className="w-[800px] rounded-md"
        />
        <div className="w-10/12 md:w-1/2 flex flex-col gap-5">

          {/* Overview */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p>...</p>
          </div>

          {/* Problems */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Problems</h3>
            <p>...</p>
          </div>

          {/* User Needs */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">User Needs</h3>
            <p>...</p>
          </div>

          {/* Ideation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Ideation</h3>
            <p>...</p>
          </div>

          {/* User-flow design */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">User-flow design</h3>
            <p>...</p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

          {/* Wireframe */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Wireframe</h3>
            <p>...</p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

          {/* Prototype */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Prototype</h3>
            <p>...</p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

          {/* High Fidelity */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">High Fidelity</h3>
            <p>...</p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>
        </div>
      </div>
      
    </main>
  );
}
