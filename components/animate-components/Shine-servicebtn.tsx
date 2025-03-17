import Link from "next/link";
import React from "react";

interface ShineBtnProps {
  className?: string;
  children: React.ReactNode;
  link: string;
}

const ShineServiceBtn: React.FC<ShineBtnProps> = ({ className, children, link }) => {
  return (
    <Link href={link ? link : '/booking'}>
      <button
        className={` ${className} inline-flex mx-auto h-12 animate-shimmer items-center justify-center rounded-md border-2 border-yellow-500 bg-[linear-gradient(110deg,#ffff00,45%,#ffffff,55%,#ffc61a)] bg-[length:200%_100%] px-6  text-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-white font-bold font-roboto`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ShineServiceBtn;