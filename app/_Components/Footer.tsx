import Link from "next/link";
import Image from "next/image";
import NextLight from "@/public/nextjs-logotype-light-background.svg";
import NextDark from "@/public/nextjs-logotype-dark-background.svg";
import VercelLight from "@/public/vercel-logotype-light.svg";
import VercelDark from "@/public/vercel-logotype-dark.svg";
import Instagram from "@/public/Instagram.svg";
import InstagramDark from "@/public/Instagram-Dark.svg";
import LinkedIn from "@/public/LinkedIn.svg";
import LinkedInDark from "@/public/LinkedIn-Dark.svg";
import Telegram from "@/public/Telegram.svg";
import TelegramDark from "@/public/Telegram-Dark.svg";
import Github from "@/public/GitHub.svg";
import GithubDark from "@/public/GitHub-Dark.svg";

export const Footer = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="flex md:hidden flex-col bg-transparent px-4 py-6 pt-24 gap-4">
        <div className="flex flex-row justify-center gap-3 text-white dark:hidden">
          <Link href="/">
            <Image src={Instagram} alt="Instagram" width={30} />
          </Link>
          <Link href="/">
            <Image src={LinkedIn} alt="LinkedIn" width={30} />
          </Link>
          <Link href="/">
            <Image src={Telegram} alt="Telegram" width={30} />
          </Link>
          <Link href="/">
            <Image src={Github} alt="Github" width={30} />
          </Link>
        </div>
        <div className="hidden dark:flex flex-row justify-center gap-3 text-white">
          <Link href="/">
            <Image src={InstagramDark} alt="Instagram" width={30} />
          </Link>
          <Link href="/">
            <Image src={LinkedInDark} alt="LinkedIn" width={30} />
          </Link>
          <Link href="/">
            <Image src={TelegramDark} alt="Telegram" width={30} />
          </Link>
          <Link href="/">
            <Image src={GithubDark} alt="Github" width={30} />
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center dark:hidden">
          <p className="text-sm font-base text-zinc-950">Powered by</p>
          <Image src={NextLight} alt="Next-Light" height={14} />
          <Image src={VercelDark} alt="Vercel-Dark" height={14} />
        </div>
        <div className="hidden dark:flex flex-row justify-center gap-4 items-center">
          <p className="text-maGray font-base">Powered by</p>
          <Image src={NextDark} alt="Next-Dark" height={14} />
          <Image src={VercelLight} alt="Vercel-Light" height={14} />
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex justify-between bg-transparent px-4 md:px-12 lg:px-96 py-6 pt-24">
        <div className="flex flex-row gap-4 items-center dark:hidden">
          <p className="text-sm font-base text-zinc-950">Powered by</p>
          <Image src={NextLight} alt="Next-Light" height={16} />
          <Image src={VercelDark} alt="Vercel-Dark" height={16} />
        </div>
        <div className="hidden dark:flex flex-row gap-4 items-center">
          <p className="text-maGray font-base">Powered by</p>
          <Image src={NextDark} alt="Next-Dark" height={16} />
          <Image src={VercelLight} alt="Vercel-Light" height={16} />
        </div>
        <div className="flex flex-row gap-3 text-white dark:hidden">
          <Link href="/">
            <Image src={Instagram} alt="Instagram" width={26} />
          </Link>
          <Link href="/">
            <Image src={LinkedIn} alt="LinkedIn" width={26} />
          </Link>
          <Link href="/">
            <Image src={Telegram} alt="Telegram" width={26} />
          </Link>
          <Link href="/">
            <Image src={Github} alt="Github" width={26} />
          </Link>
        </div>
        <div className="hidden dark:flex flex-row gap-3 text-white">
          <Link href="/">
            <Image src={InstagramDark} alt="Instagram" width={26} />
          </Link>
          <Link href="/">
            <Image src={LinkedInDark} alt="LinkedIn" width={26} />
          </Link>
          <Link href="/">
            <Image src={TelegramDark} alt="Telegram" width={26} />
          </Link>
          <Link href="/">
            <Image src={GithubDark} alt="Github" width={26} />
          </Link>
        </div>
      </div>
    </>
  );
};
