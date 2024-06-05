"use client";
import Image from "next/image";
import { projectsArray } from "../data/portfolioData";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col mt-12 p-4 gap-24 xs:p-7 xs:mb-12 sm:p-8 md:p-12 lg:p-20 xl:p-48">
      <h2 className="text-2xl">My Projects</h2>
      {projectsArray.map((p) => (
        <div className="flex flex-row gap-5" key={p.id}>
          <div className="w-1/3 mr-2 xs:hidden sm:hidden md:block lg:block xl:block">
            <Image
              src={p.img}
              width={552}
              height={320}
              alt="screenshot of portfolio home page"
            />
          </div>
          <div className="w-1/3">
            <h3 className="text-xl mb-2 xs:text-base">{p.project}</h3>

            <p className="font-bold text-sm mb-2 w-[70%]">{p.tech}</p>
            <h4 className="text-lg xs:text-sm">Role: {p.role}</h4>
          </div>
          <div className="w-1/3 xs:w-2/3 sm:w-2/3">
            <p className="mb-3 w-[80%] text-sm">{p.description}</p>
            <div className="flex flex-row w-[80%] justify-between">
              <Link
                href={p.functionality}
                className="w-fit text-base transition ease-out duration-500 transform  hover:text-cyan-600"
              >
                View here
              </Link>
              <Link
                href={p.repo}
                className="w-fit text-base transition ease-out duration-500 transform  hover:text-cyan-600"
              >
                Repo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
