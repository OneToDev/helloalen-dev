import React from "react";
import Link from "next/link";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="min-w-full flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-semibold text-2xl">Latest posts</h1>
        <p className="text-sm text-center text-maDarkGray dark:text-maGray">
          Updated July, 26 2024
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <Card
            title="[Study Case] UI/UX Design of The Biggest Sundial"
            desc="Naufal Abdussyakur · UI/UX Designer"
          />
        </div>
        {/* <div className="col-span-12 md:col-span-6">
          <Card
            title="[Study Case] UI/UX Design of The Biggest Sundial"
            desc="Naufal Abdussyakur · UI/UX Designer"
          />
        </div> */}
        {/* <div className="col-span-12 md:col-span-6">
          <Card
            title="[Study Case] UI/UX Design of The Biggest Sundial"
            desc="Naufal Abdussyakur · UI/UX Designer"
          />
        </div> */}
      </div>
      {/* <Link href="/blog">
        <button className="btn min-w-full mt-6 text-maOrange border-maOrange bg-slate-50 hover:bg-maOrange hover:text-slate-50 hover:border-none text-sm font-normal">
          See all
        </button>
      </Link> */}
    </div>
  );
};
