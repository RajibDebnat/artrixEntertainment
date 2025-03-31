"use client";
import React from "react";
// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { socialLinks } from "../../lib/data";
import { cn } from "@/lib/utils"; // This line is removed
import { HeroHighlight, Highlight } from "../../components/animate-components/hero-highlight";

import { motion } from "framer-motion";
import HeaderBtn from "../../components/animate-components/headerBtn";

import { Spotlight } from "../../components/animate-components/Spotlight";

import Reveal from "../../components/animate-components/Reveal";

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.2 } },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

export default function Hero() {
  const router = useRouter();
  return (
    <section className=" flex mt-12 max-lg:mt-4  justify-center items-center overflow-x-clip relative">
         {/* <Image className="  object-fill absolute -z-[10]" alt=" black stage background" src={'/stage.jpg'} width={1300} height={1000}/> */}
              <Spotlight className="-top-40 left-0  h-screen w-[50%] " fill="yellow" />
        
              <Spotlight className=" top-0  right-full " />
              <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
              />
              <Spotlight
                className="top-10 left-full      h-[80vh] w-[50vw]"
                fill="yellow"
              />
              <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="white" />
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
    Contact Us <br/>
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
     <motion.div 
      initial="initial" 
      animate="animate" 
      className="flex justify-center items-center pb-10 "
    >
      <div className="flex gap-6 flex-wrap">
        {socialLinks.map(({ id, icon: Icon, href, color }) => (
          <motion.a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={variants}
            whileHover="hover"
            className={`p-4 rounded-full shadow-lg bg-gray-800 ${color} text-4xl flex items-center justify-center transition-all hover:shadow-2xl`}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.div>

          <HeaderBtn className=" text-roboto" link="/services">Services</HeaderBtn>
        </div>
      </div>
    </section>
  );
}
