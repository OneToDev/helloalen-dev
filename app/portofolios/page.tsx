import React from "react";
import Image from "next/image";
import ThumbnailAmalAcademy from "@/public/Thumbnail_Amal_Acardemy_Mobile_Version.jpg";
import ThumbnailBaleSeniBarli from "@/public/Thumbnail_Bale_Seni_Barli.jpg";
import ThumbnailCmsProductCatalog from "@/public/Thumbnail_CMS_Product_Catalog.jpg";
import ThumbnailScoutours from "@/public/Thumbnail_Scoutours.jpg";
import ThumbnailTheBiggestSundial from "@/public/Thumbnail_The_Biggest_Sundial.jpg";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portofolios | Find a project that interests you!",
  description: "Find a project that interests you!",
};

export default function page() {
  return (
    <main className="md:ms-[120px] w-full min-h-screen flex flex-col gap-20 bg-[#fafafa] dark:bg-maBlack py-24">
      <div className="flex flex-col gap-3 items-center justify-center pt-24 md:pt-0">
        <h1 className="text-center font-bold text-5xl text-maBlack dark:text-white">
          Find a project that interests you!
        </h1>
        <p className="text-maDarkGray dark:text-maGray text-center px-5">
          I have completed 5 projects which you can see with the project details
        </p>
      </div>
      <div className="grid md:grid-cols-3 px-12 md:px-24 gap-5">
        <Link href="/portofolios/cms-product-catalog">
          <div className="card card-compact w-full bg-white dark:bg-maDarkGray shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md rounded-sm overflow-hidden hover:border hover:border-maOrange">
            <figure>
              <Image src={ThumbnailCmsProductCatalog} alt="Thumbnail" />
            </figure>
            <div className="card-body p-5 flex flex-col">
              <h2 className="card-title text-2xl font-bold text-maBlack dark:text-white">
                CMS Product Catalog
              </h2>
              <p className="text-maDarkGray dark:text-maGray text-base">
                Designed by Naufal Abdussyakur
              </p>
            </div>
          </div>
        </Link>
        <Link href="/portofolios/bale-seni-barli">
          <div className="card card-compact w-full bg-white dark:bg-maDarkGray shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md rounded-sm overflow-hidden hover:border hover:border-maOrange">
            <figure>
              <Image src={ThumbnailBaleSeniBarli} alt="Thumbnail" />
            </figure>
            <div className="card-body p-5 flex flex-col">
              <h2 className="card-title text-2xl font-bold text-maBlack dark:text-white">
                Bale Seni Barli
              </h2>
              <p className="text-maDarkGray dark:text-maGray text-base">
                Designed by Naufal Abdussyakur
              </p>
            </div>
          </div>
        </Link>
        <Link href="/portofolios/the-biggest-sundial">
          <div className="card card-compact w-full bg-white dark:bg-maDarkGray shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md rounded-sm overflow-hidden hover:border hover:border-maOrange">
            <figure>
              <Image src={ThumbnailTheBiggestSundial} alt="Thumbnail" />
            </figure>
            <div className="card-body p-5 flex flex-col">
              <h2 className="card-title text-2xl font-bold text-maBlack dark:text-white">
                The Biggest Sundial
              </h2>
              <p className="text-maDarkGray dark:text-maGray text-base">
                Designed by Naufal Abdussyakur
              </p>
            </div>
          </div>
        </Link>
        <Link href="/portofolios/amal-academy-mobile-version">
          <div className="card card-compact w-full bg-white dark:bg-maDarkGray shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md rounded-sm overflow-hidden hover:border hover:border-maOrange">
            <figure>
              <Image src={ThumbnailAmalAcademy} alt="Thumbnail" />
            </figure>
            <div className="card-body p-5 flex flex-col">
              <h2 className="card-title text-2xl font-bold text-maBlack dark:text-white">
                Amal Academy (Mobile Version)
              </h2>
              <p className="text-maDarkGray dark:text-maGray text-base">
                Designed by Naufal Abdussyakur
              </p>
            </div>
          </div>
        </Link>
        <Link href="/portofolios/scoutours">
          <div className="card card-compact w-full bg-white dark:bg-maDarkGray shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md rounded-sm overflow-hidden hover:border hover:border-maOrange">
            <figure>
              <Image src={ThumbnailScoutours} alt="Thumbnail" />
            </figure>
            <div className="card-body p-5 flex flex-col">
              <h2 className="card-title text-2xl font-bold text-maBlack dark:text-white">
                Scoutours
              </h2>
              <p className="text-maDarkGray dark:text-maGray text-base">
                Designed by Naufal Abdussyakur
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
