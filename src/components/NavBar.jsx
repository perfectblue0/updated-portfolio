"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const linksArray = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const firstVar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const secondVar = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const thirdVar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const linksVar = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemLink = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  // Closes the menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="h-full flex items-center justify-end px-4 sm:px-8 md:px-12 lgpx-20 xl:px-48 text-xl">
      {/* links */}
      <div className="hidden gap-10 w-3/4 md:flex">
        {linksArray.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      {/* <div className="">coming soon</div> */}
      {/* my social media */}
      <div className="hidden w-1/4 gap-5 justify-end md:flex">
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
      <div className="items-end md:hidden ">
        {/* stacked menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={firstVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={secondVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={thirdVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* list */}
        {open && (
          <motion.div
            variants={linksVar}
            initial="closed"
            animate="opened"
            className="w-screen h-screen top-0 left-0 absolute bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40"
          >
            {linksArray.map((link) => (
              <motion.div variants={itemLink} className="" key={link.title}>
                <Link href={link.url} onClick={handleLinkClick}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
