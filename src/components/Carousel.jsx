import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { picsArray } from "@/app/data/portfolioData";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newInd = firstSlide ? picsArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newInd);
    setLoaded(false);
  };

  const followingSlide = () => {
    const isLast = currentIndex === picsArray.length - 1;
    const newInd = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newInd);
    setLoaded(false);
  };

  const currentProject = picsArray[currentIndex];

  return (
    <div className="flex flex-col gap-2 ">
      <div className="w-2/3 m-auto">
        <div className="mt-10">
          <div
            className="flex flex-col items-center gap-3"
            key={currentProject.project}
          >
            <div className="w-80 h-56 relative transition ease-out duration-500 xs:w-65 xs:h-53 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px]">
              <Image
                src={currentProject.img}
                fill
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 384px, (max-width: 639px) 260px"
                priority
                onLoad={() => setLoaded(true)}
                className={`rounded-lg transition-opacity duration-700 ease-out ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                alt={currentProject.altText}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-4xl">
                {currentProject.project}
              </h3>
              <p className="italic text-center w-[100%] h-[8rem] xs:text-sm xs:h-30 lg:text-lg">
                {currentProject.description}
              </p>
              <Link
                href={currentProject.website}
                className="bg-black text-white hover:bg-sky-800 transition ease-out duration-500 p-2 mb-2 rounded transform hover:scale-105 xs:text-sm"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div
            className="flex items-center cursor-pointer text-white hover:bg-white hover:text-black transition ease-out duration-500 p-4 h-2 m-3 rounded-lg bg-gray-800"
            onClick={prevSlide}
          >
            &lt;
          </div>
          <div
            className="flex items-center cursor-pointer text-white hover:bg-white hover:text-black transition ease-out duration-500 p-4 h-2 m-3 rounded-lg bg-gray-800"
            onClick={followingSlide}
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
