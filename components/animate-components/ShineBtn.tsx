import Link from "next/link";
import React from "react";

function ShineBtn({ className, children, link }: { children: React.ReactNode; className?: string; link: string }) {
  return (
    <div className="flex  max-sm:justify-center">
      <Link className=" max-sm:inline-flex" href={link ? link : '/booking'}>
       
          <button
            className={` ${className} inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-center`}
          >
            {children}
          </button>
      
      </Link>
    </div>
  );
}

export default ShineBtn;