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
      <div className="flex flex-col gap-6">
        <Card
          title="[Study Case] UI/UX Design of The Biggest Sundial"
          desc="Naufal Abdussyakur · UI/UX Designer"
        />
        {/* <Card title="Title 1" desc="Desc 1" /> */}
        {/* <Card title="Title 1" desc="Desc 1" /> */}
      </div>
      <Link href="/blog">
        <button className="btn min-w-full mt-6 bg-white text-maOrange border-maOrange font-medium">
          See all
        </button>
      </Link>
    </div>
  );
};
