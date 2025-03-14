import Link from "next/link";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
function HeroBtn({
  children,
  className,
  link
}: {
  children: React.ReactNode;
  className: string;
  link:string
}) {
  return (
    <Link href={link}>
      <button
        className={` font-roboto flex items-center gap-2   cursor-pointer shadow-[0_0_0_3px_#000000_inset] px-6 py-3 bg-transparent border border-primary-yellow dark:border-primary-yellow dark:text-slate-800 text-black  rounded-lg hover:bg-gradient-to-r font-bold transform hover:-translate-y-1 transition duration-400 bg-gradient-to-r from-primary-yellow to-white ${className} `}
      >
        {children}
        <span className=" text-2xl">
          <CiLocationArrow1 />
        </span>{" "}
      </button>
    </Link>
  );
}

export default HeroBtn;

// <button className={`p-[3px] relative  cursor-pointer  ${className}`}>
//   <div className="absolute cursor-pointer  inset-0  rounded-lg" />
//   <Link href={'contact-us'} className="px-8 py-2   bg-black  hover:bg-yellow-700 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
//     {children}
//   </Link>
// </button>
