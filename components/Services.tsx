"use client";
import React from "react";
import { services } from "@/lib/data";
import { SparklesCore } from "./animate-components/sparkles";
import Image from "next/image";
import logo from "../public/logo.png";
import { PinContainer } from "./ui/3d-pin";

function Services() {
  return (
    <section id="services" className="px-4 py-10  max-2xl:px-6">
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold font-bebas tracking-wider mb-10">
        Our <span className="text-primary-yellow">Services</span>
      </h2>

      <div className="mx-auto grid  gap-y-14 gap-x-2 grid-cols-2  max-lg:grid-cols-1 max-w-7xl">
        {services.map((service) => (
          <PinContainer
            key={service.id}
            title={service.heading}
            href={service.link}
          >
            <div className="flex flex-col p-4 max-sm:p-0 tracking-tight text-slate-100/50 w-[30em] max-xl:w-[25em] max-sm:w-[16em] max-sm:h-[18em] max-lg:w-[20em] h-[20em]">
              <h3 className="font-roboto tracking-widest font-bold text-base text-slate-100 mb-2">
                {service.heading}
              </h3>
              <p className="text-slate-500 text-sm font-roboto mb-4">
                {service.para}
              </p>

              <Image
                src={service.image}
                alt="service image"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}

export default Services;
