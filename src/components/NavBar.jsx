"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const linksArray = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-end px-4 sm:px-8 md:px-12 lgpx-20 xl:px-48 text-xl">
      {/* links */}
      <div className="hidden gap-10 w-1/2 md:flex">
        {linksArray.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* logo */}
      {/* <div className="">coming soon</div> */}
      {/* my social media */}
      <div className="hidden w-1/2 gap-5 md:flex justify-end ">
        <Link href="https://github.com/perfectblue0">
          <Image
            src="/github.png"
            alt="github logo with link to my profile"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/paola-g-lupercio/">
          <Image
            src="/linkedin.png"
            alt="linkedIn logo with link to my profile"
            width={30}
            height={30}
          />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden items-end">
        {/* stacked menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-11 h-1 bg-black rounded origin-left"></div>
          <div className="w-11 h-1 bg-black rounded origin-left"></div>
          <div className="w-11 h-1 bg-black rounded origin-left"></div>
        </button>
        {/* list */}

        {open && (
          <div className="w-screen h-screen top-0 left-0  absolute bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40">
            {linksArray.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
