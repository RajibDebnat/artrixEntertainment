"use client";
import React from "react";
// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeroParallax } from "../animate-components/hero-parallax";
import { products } from "@/lib/data";
import logo from  "../../public/logo.png";
import { cn } from "@/lib/utils"; // This line is removed
import ShineBtn from "../animate-components/ShineBtn";
import HeaderBtn from "../animate-components/headerBtn";
export default function Hero() {
  const router = useRouter();
  return (
    <section>
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className=" relative z-30 flex flex-col items-center justify-start min-h-[60vh] text-center px-6">
        <h1 className="text-8xl my-4 max-md:mb-4  font-bold text-center font-bebas max-md:text-6xl max-sm:text-5xl tracking-wide">
        Artrix{" "}
        <Image
          src={logo}
          alt="artrix entertainment logo image"
          height={100}
          width={100}
          className="max-[344px]:hidden inline-block rounded-full"
        />{" "}
        <span className="  text-primary-yellow"> Entertainment</span>
      </h1>
          <p className=" max-w-[70%] mx-auto mb-8 font-roboto text-xl font-thin ">
          Your One-Stop Solution for Live Entertainment, Talent Partnerships, Event Programming, Brand
          Strategies, and More! At Artrix Entertainment, we transform ideas into unforgettable experiences. Whether it's live events,
          influencer campaigns, or brand activations, we bring passion, creativity, and expertise to every project.
          </p>
        
        <HeaderBtn link="/services">Our Services</HeaderBtn>
        </div>
      </div>
    </section>
  );
}
