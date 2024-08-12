import React from "react";
import Image from "next/image";
import Image1 from "@/public/Thumbnail_Amal_Acardemy_Mobile_Version.jpg";
import Link from "next/link";

export const Card = (params: { title: string; desc: string }) => {
  return (
    // <Link href={`/blog/${params.title}`}>
    //   <div className="card bg-white shadow-md">
    //     <figure className="w-full lg:w-[500px] h-[280px] overflow-hidden">
    //       <Image src={Image1} alt="Thumbnail" />
    //     </figure>
    //     <div className="card-body text-base-300 md:flex">
    //       <h2 className="card-title">{params.title}</h2>
    //       <p className="text-maDarkGray">{params.desc}</p>
    //       {/* <div className="card-actions">
    //       <button className="btn w-full lg:w-fit bg-maOrange text-white font-medium border-none">Read now</button>
    //     </div> */}
    //     </div>
    //   </div>
    // </Link>
    <Link href={`/blog/${params.title}`}>
      <div className="card bg-white dark:bg-zinc-900 w-full shadow-sm hover:shadow-md rounded-2xl">
        <figure className="max-h-52">
          <Image src={Image1} alt="Thumbnail" className="scale-125" />
        </figure>
        <div className="card-body bg-white dark:bg-zinc-950 rounded-2xl">
          <div className="badge badge-secondary">NEW</div>
          <h2 className="card-title">{params.title}</h2>
          <p className="text-maDarkGray dark:text-zinc-300">{params.desc}</p>
          <div className="card-actions justify-end text-maOrange">
            {/* <div className="badge badge-outline">UI/UX Design</div> */}
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
