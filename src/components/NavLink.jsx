"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      className={`p-2 rounded-lg ${
        pathName === link.url &&
        "bg-gradient-to-r from-blue-700 to-purple-700 text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
