"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Carousel() {
  const picsArray = [
    {
      project: `First React Portfolio`,
      img: `/vanPort.jpg`,
      description: `This deployed project was my first application made with React and Vanilla CSS.`,
      website: `https://perfectblue0.github.io/c-20-React-Portfolio/`,
    },
    {
      project: `MySQL E-commerce Backend Project`,
      img: `/ecomImg.jpg`,
      description: `This is an undeployed project where I used Sequelize to interact with a MySQL database to build the backend of an e-commerce application.`,
      website: `https://github.com/perfectblue0/c-13-E-commerce-ORM?tab=readme-ov-file`,
    },
    {
      project: `Social Network API`,
      img: `/handsNet.jpg`,
      description: `I built this API so users could share their thoughts, reactions to friends' thoughts, and create a list of their friends. This project is not deployed and uses Express.js for routing, Day.js to format dates, has a MongoDB database, and Mongoose ODM.`,
      website: `https://github.com/perfectblue0/c-18-NoSQL-Social-Net-API`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const pSlide = () => {
    const isFirst = currentIndex === 0;
    const newInd = isFirst ? picsArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newInd);
  };

  const nextS = () => {
    const isLast = currentIndex === picsArray.length - 1;
    const newInd = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newInd);
  };

  return (
    // need to decide to use react and figure out way to only show first project so i can use above code or use ui library to finish carousel
    <div className="w-3/4 m-auto relative group">
      <div className="mt-20">
        {picsArray.map((p) => (
          <div
            className="bg-red-300 h-[450px] flex flex-col items-center rounded-lg"
            key={p.project}
          >
            <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
              <Image
                className=""
                src={p.img}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 96vw, (max-width: 1024px) 500px, 600px"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                {p.project}
              </h3>
              <p className="italic w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                {p.description}
              </p>
              <Link href={p.website} className="flex justify-end">
                <button className="bg-blue-300 p-2 rounded">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* left arrow */}
      <div className="absolute p-2 top-[50%] -translate-x-0 translate-y-[-%50] left-5 text-2xl rounded bg-white">
        <div onClick={pSlide}>&lt;</div>
      </div>
      {/* right arrow */}
      <div className="absolute p-2 top-[50%] -translate-x-0 translate-y-[-%50] right-5 text-2xl rounded bg-white">
        <div onClick={nextS}>&gt;</div>
      </div>
    </div>
  );
}
