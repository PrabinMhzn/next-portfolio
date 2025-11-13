"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "blogs", path: "/blogs" },
  { name: "resume", path: "/resume" },
  { name: "portfolio", path: "/portfolio" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Prevent SSR mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  if (!mounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger Button */}
      <SheetTrigger
        aria-label="Open mobile menu"
        className="flex justify-center items-center p-2 rounded-md hover:bg-lime-100/10 active:scale-95 transition-all"
      >
        <CiMenuFries className="text-[34px] sm:text-[40px] text-lime-500" />
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent
        side="right"
        className="
          flex flex-col items-center justify-between
          bg-neutral-900 text-white px-6 py-8
          w-full sm:w-[80vw] md:w-[60vw]
        "
      >
        {/* Logo */}
        <div className="w-full text-center mt-10 mb-12">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-3xl font-semibold text-lime-400 hover:scale-105 transition-transform">
              Prabin<span className="text-lime-300">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6 w-full">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`
                text-lg sm:text-xl capitalize tracking-wide 
                transition-all duration-300 
                ${
                  pathname === link.path
                    ? "text-lime-400 border-b-2 border-lime-400 pb-1"
                    : "text-gray-300 hover:text-lime-400"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer Section (Optional – social icons or contact info) */}
        <div className="mt-16 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Prabin</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
