import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThumbnailCmsProductCatalog from "@/public/Thumbnail_CMS_Product_Catalog.jpg";
// import ThumbnailWhite from "@/public/Thumbnail-Bragada.ui-Light.jpg";
import { LuMoveLeft } from "react-icons/lu";

export default function page() {
  return (
    <main className="md:ms-[120px] md:me-[20px] w-full min-h-screen flex flex-col gap-8 md:gap-10 bg-[#fafafa] dark:bg-maBlack py-12">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center pt-24 md:pt-0">
        <Link
          href="/portofolios"
          className="flex gap-1 items-center text-maDarkGray dark:text-maGray opacity-50 dark:opacity-80"
        >
          <LuMoveLeft />
          <p>Back</p>
        </Link>
        <h1 className="text-center font-extrabold text-5xl text-maBlack dark:text-white">
          CMS Product Catalog
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

      {/* Content */}
      <div className="w-full flex flex-col items-center gap-8">
        <Image
          src={ThumbnailCmsProductCatalog}
          alt="Thumbnail"
          className="w-[800px] rounded-lg shadow-md"
        />
        <div className="w-full px-4 md:w-1/2 md:px-0 flex flex-col gap-5">
          {/* Overview */}
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

          {/* Problems */}
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

          {/* User Needs */}
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

          {/* Ideation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Ideation</h3>
            <p>
              Pada redesign ini, saya ada beberapa ide yang bisa diterapkan
              dengan tetap menncapai tujuan dari setiap fiturnya. Berikut
              beberapa idenya :
            </p>
            <ol className="list-decimal ps-6">
              <li>
                Style
                <p>
                  Dengan refensi dari{" "}
                  <a href="https://ioh.co.id/portal/id/iohindex">
                    Indosat Oredoo Hutchison
                  </a>
                  , akan ada beberapa penyesuaian agar terjaga konsistensi
                  karakteristinya. Mulai dari text yang digunakan, color
                  palette, spacing, border dan shadow.
                </p>
              </li>
              <li>
                Interaction
                <p>
                  Penyesuain dari segi interaksi user dengan website agar
                  terjalin komunikasi yang baik antara user dengan website.
                  Mulai dari penempatan overlay, hovering dan animation.
                </p>
              </li>
              <li>
                Layouting
                <p>
                  Menata kembali penempatan content dan fitur agar sesuai dengan
                  kebutuhan dari perusahaan dan tentunya mempermudah dalam
                  penggunaannya. Juga untuk meperkuat karakter dari aplikasi
                  agar experience yang didapatkan oleh user bisa maksimal.
                </p>
              </li>
            </ol>
          </div>

          {/* User-flow design */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">User-flow design</h3>
            <p>
              Berikut gambaran penggunaan aplikasi dengan tujuan yang ingin
              dicapai,
            </p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

          {/* Wireframe */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Wireframe</h3>
            <p>
              ...
            </p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

          {/* Prototype */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Prototype</h3>
            <p>
              ...
            </p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>
          
          {/* High Fidelity */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">High Fidelity</h3>
            <p>
              ...
            </p>
            {/* <Image src={} alt="user-flow" /> */}
          </div>

        </div>
      </div>
    </main>
  );
}
