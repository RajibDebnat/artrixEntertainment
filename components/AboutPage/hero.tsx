"use client";
import React from "react";
// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils"; // This line is removed
import { HeroHighlight } from "../animate-components/hero-highlight";
import { Highlight } from "../animate-components/hero-highlight";
import { motion } from "framer-motion";
import HeaderBtn from "../animate-components/headerBtn";

import { words } from "@/lib/data";
import Reveal from "../animate-components/Reveal";
export default function Hero() {
  const router = useRouter();
  return (
    <section>
      <div className="relative flex h-[40rem] w-full items-center justify-center bg-white  dark:bg-black">
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
        <div className=" relative z-30 flex flex-col items-center justify-start min-h-[60vh] text-center px-6 max-sm:px-0">
      
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-7xl  font-bebas tracking-wider max-lg:p-2  px-4 max-md:text-4xl max-lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
      >
      Know About <br/>
        <Highlight className=" text-slate-900 pl-2">
          Artrix Entertainment
        </Highlight>
      </motion.h1>
    <Reveal width="contentfull" direction="y" >

          {/* <TypewriterEffectSmooth words={words}/> */}
          <p className=" w-[70%] max-lg:w-[90%] max-md:w-full mx-auto my-8 font-roboto text-xl max-lg:text-lg max-md:text-sm font-thin max-md:font-normal ">
            Artrix Entertainment is your visionary partner in creating
            extraordinary brand and event experiences. We fuse creativity with
            strategy to deliver live entertainment, influencer campaigns, and
            immersive activations that captivate audiences and spark measurable
            growth.
          </p>
    </Reveal>

          <HeaderBtn className=" text-roboto" link="/services">Services</HeaderBtn>
        </div>
      </div>
    </section>
  );
}
