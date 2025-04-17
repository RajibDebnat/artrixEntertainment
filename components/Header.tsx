import Image from "next/image";
import React from "react";
import HeroBtn from "./animate-components/hero-btn";
import logo from "../public/logo.png";
import HeaderBtn from "./animate-components/headerBtn";
import Link from "next/link";

function Header() {
  return (
    <header className=" relative z-40 w-full bg-transparent  py-0 px-6 max-sm:px-0">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Artrix Entertainment Logo"
            width={100}
            height={100}
            className=" rounded-full max-lg:h-16  max-lg:w-16"
          />
        </Link>

        <HeaderBtn
          link="/services"
          className=" max-sm:py-2 max-sm:px-3 font-roboto"
        >
          Get Started
        </HeaderBtn>
      </div>
    </header>
  );
}

export default Header;
