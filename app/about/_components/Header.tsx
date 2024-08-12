import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo-Character.png";

export const Header = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-24">
      <div className="flex flex-col gap-2 text-center font-bold text-5xl">
        <h1 className="text-zinc-950 dark:text-maGray">
          About <span className="text-maOrange">Naufal Abdussyakur</span>
        </h1>
      </div>
      <Image src={Logo} alt="Logo" width={240} className="pb-6" />
      <p className="text-base font-medium text-center text-zinc-950 dark:text-maGray">
        Description? Wait a minute ...
      </p>
    </div>
  );
};
