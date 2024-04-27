"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 lg:flex-row xl:px-48">
      {/* image */}
      <div className="h-1/2 relative mb-2 mr-3 lg:h-full lg:w-1/2">
        <Image
          src="/womanLaptopBirds.png"
          alt="woman looking at phone and holding laptop surrounded by clouds and birds"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
        {/* title */}
        <h3 className="text-3xl md:text-4xl mt-6 font-bold">
          Harnessing the Power of Tech and Creativity
        </h3>
        {/* description */}
        <p className="md:text-lg">
          Welcome to my virtual gallery, where imagination intertwines with
          technical skill. Dive into my portfolio, showcasing a variety of
          projects meticulously crafted to highlight my dedication to quality
          and ingenuity.
        </p>
        {/* buttons */}
        <div className="w-full flex pb-4 gap-4">
          <Link href="/portfolio">
            <button className="p-3 rounded-lg bg-gray-700 text-white hover:bg-sky-800 transition ease-out duration-500 transform hover:scale-105">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="p-3 rounded-lg bg-gray-700 text-white hover:bg-sky-800 transition ease-out duration-500 transform hover:scale-105">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
