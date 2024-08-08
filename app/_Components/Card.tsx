import React from "react";
import Image from "next/image";
import Image1 from "@/public/Thumbnail_Amal_Acardemy_Mobile_Version.jpg";
import Link from "next/link";

export const Card = (params : {title : string, desc: string}) => {
  return (
    <Link href={`/blog/${params.title}`}>
      <div className="card lg:card-side bg-white shadow-md min-w-full">
        <figure className="w-full lg:w-[500px] h-[280px]">
          <Image src={Image1} alt="Thumbnail" className="scale-150" />
        </figure>
        <div className="card-body text-base-300 md:flex">
          <h2 className="card-title">{params.title}</h2>
          <p className="text-maDarkGray">{params.desc}</p>
          {/* <div className="card-actions">
          <button className="btn w-full lg:w-fit bg-maOrange text-white font-medium border-none">Read now</button>
        </div> */}
        </div>
      </div>
    </Link>
  );
};
