"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" flex py-8 xl:py-12 text-gray-400 w-full">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <ModeToggle />
        <div>
          <Link href="/">
            <h1 className="text-5xl font-semibold text-lime-400 hover:scale-110 duration-500">
              Prabin<span className="text-lime-200">.</span>
            </h1>
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link href="/contact" className="px-8">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
