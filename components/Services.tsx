"use client";
import React from "react";
import { services } from "@/lib/data";

import { SparklesCore } from './animate-components/sparkles'
import Image from "next/image";
import logo from "../public/logo.png";
import { PinContainer } from "./ui/3d-pin";
function Services() {
  return (
    <section id="services" className="p-10 max-lg:p-0 max-md:p-6 max-sm:p-2">
       <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">
        Our <Image src={logo} alt="artrix entertainment logo image" height={100} width={100} className=" inline-block rounded-full"/> <span className="  text-primary-yellow"> Services</span>
      </h2>
      <div className=" w-full flex items-center max-xl:gap-8  max-lg:gap-12  justify-center max-xl:flex-wrap ">
        {services.map((service) => (
          <PinContainer
          key={service.id}
          title={service.heading}
        href={service.link}
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className=" font-roboto tracking-widest max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {service.heading}
          </h3>
          <div className="text-base font-roboto mb-4  !p-0 font-normal">
            <span className="text-slate-500 ">
             {service.para}
            </span>
          </div>
          
        <Image src={service.image} alt='service images ' width={400} height={400} className=" object-fill rounded-xl"/>
        </div>
      </PinContainer>
        ))}
    </div>
    </section>
  );
}

export default Services;
