import { Header } from "../_Components/Header";
import { Cards } from "../_Components/Cards";
import { Footer } from "../_Components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col px-4 md:px-16 xl:px-96 items-center justify-center">
      <Header />
      <Cards />
      {/* <div className="flex gap-3">
        <Link href="/portofolios">
          <p className="px-5 py-3 rounded-full bg-maOrange text-white">
            Check My <span className="font-semibold">Projects</span> 🚀
          </p>
        </Link>
        <Link href="/contact">
          <p className="px-5 py-3 rounded-full bg-white text-maBlack border border-solid border-maGray dark:border-none">
            <span className="font-semibold">Contact</span> Me
          </p>
        </Link>
      </div> */}
    </main>
  );
}
