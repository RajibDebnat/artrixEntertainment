'use client'
import React from "react";
import { TextGenerateEffect } from "./animate-components/text-generate-effect";
import { Spotlight } from "./animate-components/Spotlight";
import HeroBtn from "./animate-components/hero-btn";
import Image from "next/image";
import { ShootingStars } from "./animate-components/shooting-stars";
import { StarsBackground } from "./animate-components/stars-background";
import { GiMicrophone } from "react-icons/gi";
import { LinkPreview } from "./animate-components/link-preview";
import { FaPlay } from "react-icons/fa";
import Reveal from "./animate-components/Reveal";
import { useState, useEffect } from "react";
import { heroImage } from "../lib/data";
import { AnimatePresence, motion } from "framer-motion";
function HomeComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className=" flex mt-12 max-lg:mt-4  justify-center items-center relative"
    >
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

      <div className="flex max-lg:gap-0 max-lg:flex-col relative z-30    items-center justify-center gap-16   w-[90%] max-xl:w-full">
        <div className=" max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center -mt-16 max-xl:mt-0 w-[65%] max-lg:w-full">
          <p className=" max-sm:text-left max-sm:text-[14px] max-lg:justify-center max-lg:text-center  text-lg font-bold font-roboto flex items-center gap-2">
            {" "}
            <span className=" max-lg:text-center  text-yellow-500 rounded-xl text-4xl">
              <GiMicrophone />
            </span>
            <span>CREATING MOMENTS THAT INSPIRE </span>
          </p>
          <h1 className="font-bold max-lg:text-center   font-bebas text-slate-800">
            <TextGenerateEffect words="Where Entertainment Meets Innovation Artrix Entertainment" />
          </h1>
          <p
            className=" max-sm:p-3 font-semibold text-lg mt-4 max-w-[400px]:text-left  w-[90%] max-sm:w-full font-roboto text-slate-200 max-lg:mx-auto  max-md:text-sm max-sm
          :text-xs"
          >
            Your One-Stop Solution for Live Entertainment, Talent Partnerships,
            Event Programming, Brand Strategies, and More! At Artrix
            Entertainment, we transform ideas into unforgettable experiences.
          </p>
          <div className="flex max-[400px]:justify-left max-lg:justify-center   mt-8 items-center gap-4  ">
            <HeroBtn
              link="/contact-us"
              className={" max-sm:py-2 max-sm:px-3 font-roboto "}
            >
              Get Started{" "}
            </HeroBtn>

            <LinkPreview
              className=" flex items-center justify-center bg-primary-yellow rounded-full p-4"
              url="https://youtu.be/k3g_WjLCsXM?si=7NnmHyX-HT_PPXr5"
            >
              <FaPlay className="  max-sm:text-xl  text-2xl  text-slate-900" />
            </LinkPreview>
          </div>

          {/* <HeroBtn /> */}
        </div>

        <div className="flex justify-center items-center relative  h-[600px] w-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full flex justify-center items-center max-sm:-mt-24 "
        >
          <Image
            src={heroImage[currentIndex].image}
            alt={heroImage[currentIndex].alt}
            width={800}
            height={600}
            className="mx-auto max-xl:w-[70%] max-sm:h-auto max-lg:mt-12 max-sm:w-[50%]  max-sm:mt-0 object-cover "
          />
        </motion.div>
      </AnimatePresence>
    </div>
      </div>
      <ShootingStars starHeight={2} starWidth={15} starColor="primary-yellow" />
      <StarsBackground />
    </section>
  );
}

export default HomeComponent;
