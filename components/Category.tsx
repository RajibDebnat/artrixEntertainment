"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import logo from  "../public/logo.png";
function Category() {
  // Parent animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the delay between animations
      },
    },
  };

  // Child animation variants for sliding up
  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="category"
       className="text-white p-10 max-lg:p-8 max-md:p-6 max-sm:p-4 max-[400px]:p-2 rounded-2xl  flex flex-col items-center justify-center"
    >
      <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wider">
              Our  <span className="  text-primary-yellow"> Category</span>
            </h2>
      
      <motion.div
        className="w-[70vw] max-lg:w-full relative -rotate-3 mx-auto grid p-6 max-md:p-0 grid-cols-3 gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* First Image */}
        <motion.div variants={itemVariants} className="rounded-2xl relative">
          <Link href={"./booking"}></Link>
          <Image
            src={"/category/tamanna.png"}
            height={700}
            width={380}
            alt="event category images"
            className="transition duration-300 grayscale hover:grayscale-0 cursor-pointer text-center rounded-2xl"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div variants={itemVariants} className="rounded-2xl relative">
          <Image
            src={"/category/jubin.png"}
            height={700}
            width={380}
            alt="event category images"
            className="cursor-pointer transition duration-300 grayscale hover:grayscale-0 text-center rounded-2xl"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div variants={itemVariants} className="rounded-2xl relative">
          <Image
            src={"/category/bhuvanbam.png"}
            height={700}
            width={380}
            alt="event category images"
            className="cursor-pointer transition duration-300 grayscale hover:grayscale-0 text-center rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Category;
