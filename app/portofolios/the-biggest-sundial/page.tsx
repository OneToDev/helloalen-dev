import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMoveLeft } from "react-icons/lu";
import ThumbnailTheBiggestSundial from "@/public/Thumbnail_The_Biggest_Sundial.jpg";

export default function page() {
  return (
    <main className="md:ms-[120px] md:me-[20px] w-full min-h-screen flex flex-col gap-8 md:gap-10 bg-[#fafafa] dark:bg-maBlack py-12">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Link
          href="/portofolios"
          className="flex gap-1 items-center text-maDarkGray dark:text-maGray opacity-50 dark:opacity-80"
        >
          <LuMoveLeft />
          <p>Back</p>
        </Link>
        <h1 className="text-center font-extrabold text-5xl text-maBlack dark:text-white">
          The Biggest Sundial
        </h1>
        <p className="text-maDarkGray dark:text-maGray">
          Designed by{" "}
          <Link
            href="https://instagram.com/amoebajelek_"
            className="font-medium text-maOrange
        "
            target="_blank"
          >
            Naufal Abdussyakur
          </Link>
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <Image
          src={ThumbnailTheBiggestSundial}
          alt="Thumbnail"
          className="w-[800px] rounded-md"
        />

        {/* <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p>
              <a
                href="https://www.telkom.co.id/sites"
                className="text-maOrange"
                target="_blank"
              >
                PT Telkom Indonesia
              </a>{" "}
              memiliki sebuah website catalog sendiri{" "}
              <a
                href="https://productcatalog.telkom.co.id/"
                className="text-maOrange"
                target="_blank"
              >
                disini
              </a>{" "}
              yang bertujuan sebagai pusat informasi mengenai produk yang
              dimiliki oleh perusahaan yang diperuntukkan bagi salesnya.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Problems</h3>
            <p>
              Secara fungsional sebagian besar sudah bekerja dengan baik. Namun
              yang menjadi permasalahann adalah desain yang digunakan belum
              update. Desain masih menggunakan desain lama dan belum menerapkan
              prinsip UI/UX.{" "}
              <a
                href="https://www.telkom.co.id/sites"
                className="text-maOrange"
                target="_blank"
              >
                PT Telkom Indonesia
              </a>{" "}
              menginginkan untuk re-desain website yang ada dengan penerapan
              UI/UX dengan beberapa referensi yang mereka inginkan.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">User Needs</h3>
            <p>
              Ada beberapa website yang bisa dijadikan referensi untuk redesign
              :
            </p>
            <ol className="list-decimal ps-6">
              <li>
                <a
                  href="https://ioh.co.id/portal/id/iohindex"
                  className="text-maOrange"
                >
                  Indosat Oredoo Hutchison
                </a>
              </li>
              <li>
                <a
                  href="https://www.modena.com/id_id"
                  className="text-maOrange"
                >
                  Modena
                </a>
              </li>
              <li>
                <a href="https://www.huawei.com/en/" className="text-maOrange">
                  Huawei
                </a>
              </li>
            </ol>
          </div>
        </div> */}
      </div>
    </main>
  );
}
