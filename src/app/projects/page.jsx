"use client";
import { projectsArray } from "../data/portfolioData";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col mt-12 p-4 gap-24 xs:p-7 sm:p-8 md:p-12 lg:p-20 xl:p-48">
      <h2 className="text-2xl">My Projects</h2>
      {projectsArray.map((p) => (
        <div className="flex flex-row gap-5" key={p.id}>
          <div className="w-1/3">
            <h3 className="text-xl xs:text-base">{p.project}</h3>
            <p className="font-bold text-sm w-[70%]">{p.tech}</p>
          </div>
          <div className="w-2/3">
            <p className="mb-3 w-[80%] xs:text-sm">{p.description}</p>
            <Link
              href={p.website}
              className="w-fit transition ease-out duration-500 transform  hover:text-cyan-600"
            >
              View here
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
