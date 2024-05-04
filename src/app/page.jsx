"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 sm:items-center md:px-12 lg:px-20 lg:flex-row xl:px-48">
      {/* image */}
      <div className="h-1/2 relative mb-2 mr-3 sm:w-1/3 sm:h-1/3 sm:mb-0 md:mb-2 md:mt-6 md:w-1/3 lg:h-full lg:w-1/2">
        <Image
          src="/womanLaptopBirds.webp"
          alt="woman looking at phone and holding laptop surrounded by clouds and birds"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-4 justify-center xs:items-center sm:w-[70%] sm:mt-3 sm:items-center md:items-center lg:w-1/2 lg:h-full">
        {/* title */}
        <h3 className="text-6xl mt-6 xs:text-5xl sm:text-center lg:text-8xl">
          Welcome
        </h3>

        {/* description */}
        <p className="pb-6 text-center w-[80%] md:text-lg md:w-[70%] lg:w-[90%]">
          Whether I&rsquo;m diving into a lively Scrabble match, baking up a
          frenzy, or teaming up in a video game with my husband, I&rsquo;m
          always eager to take on new challenges. This zest for exploration
          extends into my professional life where I am passionate about learning
          and continually updating my skills with the latest developer
          technologies.
        </p>
      </div>
    </div>
  );
}
