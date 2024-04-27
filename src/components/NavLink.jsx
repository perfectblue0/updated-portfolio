"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      className={`hover:bg-sky-800 transition ease-out duration-500 p-2 mb-2 rounded-lg transform hover:scale-105 hover:text-white ${
        pathName === link.url && "border-gray-700 border-2"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
