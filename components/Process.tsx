import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import {
  FaSearch,
  FaPencilRuler,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { StarsBackground } from "./animate-components/stars-background";

export function ProcessSection() {
  const features = [
    {
      id: 1,
      title: "DISCOVER",
      description:
        "We begin by understanding your goals, audience, and expectations to create a strategic plan tailored to your needs.",
      icon: <FaSearch size={40} />,
    },
    {
      id: 2,
      title: "DESIGN",
      description:
        "Using insights and creativity, we craft unique solutions that capture attention and deliver results.",
      icon: <FaPencilRuler size={40} />,
    },
    {
      id: 3,
      title: "EVALUATE",
      description:
        "We measure success through detailed metrics, providing insights and recommendations for future growth.",
      icon: <FaChartLine size={40} />,
    },
    {
      id: 4,
      title: "DELIVER",
      description:
        "Our team ensures flawless execution, from event coordination to post-event analysis.",
      icon: <FaCheckCircle size={40} />,
    },
  ];
  return (
    <section id="process" className="p-10 max-md:p-6 max-sm:p-2">
      
      <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">
        Our <Image src={logo} alt="artrix entertainment logo image" height={100} width={100} className=" inline-block rounded-full"/> <span className="  text-primary-yellow"> Process</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      {/* <StarsBackground/> */}
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 text-primary-yellow relative z-10 px-10  ">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block font-bebas tracking-widest text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm font-roboto text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
      
    </div>
  );
};
