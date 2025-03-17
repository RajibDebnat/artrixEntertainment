"use client";
import React from "react";
import { services } from "@/lib/data";
import Card from "./ui/Card";

function Services() {
  return (
    <section id="services" className="p-10 max-md:p-6 max-sm:p-2">
      <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">
        Our <span className="  text-primary-yellow"> Services</span>
      </h2>
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
    </section>
  );
}

export default Services;
