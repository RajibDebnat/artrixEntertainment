"use client";
import React from "react";
import { services } from "@/lib/data";
import Card from "./ui/Card";
import { SparklesCore } from './animate-components/sparkles'
import Image from "next/image";
import logo from "../public/logo.png";
function Services() {
  return (
    <section id="services" className="p-10 max-md:p-6 max-sm:p-2">
       <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">
        Our <Image src={logo} alt="artrix entertainment logo image" height={100} width={100} className=" inline-block rounded-full"/> <span className="  text-primary-yellow"> Services</span>
      </h2>
         <div className=" h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
       
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((item) => (
          <Card
            key={item.id}
            heading={item.heading}
            para={item.para}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
        </div>
    </section>
  );
}

export default Services;
