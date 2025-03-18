"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import ShineBtn from "../animate-components/ShineBtn";
import ShineServiceBtn from "../animate-components/Shine-servicebtn";

interface CardProps {
  heading: string;
  para: string;
  image: StaticImageData;
  link: string;
}

const Card: React.FC<CardProps> = ({ heading, para, image, link }) => {
  return (
    <CardContainer className="inter-var w-full  mx-auto">
     
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-3 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="  hover:grayscale-0 h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl mt-4 tracking-wider font-bebas  font-bold text-neutral-600 dark:text-white"
        >
          {heading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" font-roboto  my-4 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {para}
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/services/${link}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Learn More →
          </CardItem>
          <CardItem>
            <ShineServiceBtn className="" link={`booking/${link}`}>
              Book Now
            </ShineServiceBtn>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
