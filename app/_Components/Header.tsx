import React from "react";
import Image from "next/image";
import Logo from '@/public/Logo-Character.png'

export const Header = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-24">
      <Image src={Logo} alt="Logo" width={240} className="pb-6" />
      <p className="text-base font-normal text-center">
        Hello 👋🏻, I&apos;m Naufal Abdussyakur and you can call me <span className="font-semibold text-maOrange">Alen</span>. I&apos;m
        a
      </p>
      <div className="flex flex-col gap-2 text-center font-bold text-5xl">
        <h1 className="text-maOrange">Product Designer</h1>
        <h1 className="text-zinc-950 dark:text-maGray">Based in Indonesia</h1>
      </div>
      <p className="text-base font-normal text-center text-zinc-950 dark:text-maGray">
        Enjoy the journey in realizing your desired dreams
      </p>
    </div>
  );
};
