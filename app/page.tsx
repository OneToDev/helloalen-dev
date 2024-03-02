import Link from "next/link";

export default function Home() {
  return (
    <main className="md:ms-[120px] md:me-[20px] w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-white dark:bg-[#252525]">
      <div className="flex flex-col gap-3 items-center justify-center">
        <p>Hello 👋🏻, I’am Naufal Abdussyakur. I’m a</p>
        <h1 className="text-center font-bold text-5xl">Fullstack Developer<br />Based in Indonesia</h1>
        <p className="text-center px-5">Enjoy the journey in realizing your desired dreams</p>
      </div>
      <div className="flex gap-3">
        <Link href='/portofolios'>
          <p className='px-5 py-3 rounded-full bg-maOrange'>Check My <span className="font-semibold">Projects</span> 🚀</p>
        </Link>
        <Link href='/contact'>
          <p className='px-5 py-3 rounded-full bg-maGray text-maBlack'><span className="font-semibold">Contact</span> Me</p>
        </Link>
      </div>
    </main>
  );
}
