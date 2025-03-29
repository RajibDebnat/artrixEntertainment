"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BentoGrid , BentoGridItem } from "../animate-components/bento-grid";
import { aboutUs } from "@/lib/data";
const WhoWeAre = () => {
    return (
      <section className="py-16">
     <div>
      <h2 className=" my-8 text-center text-6xl  max-md:text-5xl max-sm:text-4xl   font-bebas tracking-wider font-bold">About <span className=" text-primary-yellow">Us</span> </h2>

      <div>
      <BentoGrid className="max-w-4xl mx-auto">
      {aboutUs.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
        
          icon={<item.image/>}
          className={`${i === 0 ? "md:row-span-2" : ""} ${i==1 ? "md:col-span-2" : ""} ${i==2 ? "md:col-span-2" : ""} ${i==3 ? "md:row-span-2" : ""}`}
        />
     
         ))} 
            </BentoGrid>
      </div>
     </div>
         
      </section>
    );
  };

export default WhoWeAre;
