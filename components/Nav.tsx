"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "portfolio",
    path: "/portfolio",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`capitalize text-lg hover:text-lime-600 hover:scale-110 duration-300 transition-all px-4 py-2 ${
              link.path === pathname
                ? "text-lime-400 border-b-2 border-lime-500"
                : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
