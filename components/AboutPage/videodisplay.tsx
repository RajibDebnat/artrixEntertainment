"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/animate-components/glowing-effect";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/video-thumbanil/image.webp";
import Link from "next/link";

export default function VideoDisplay() {
  return (
    <section id="video-display" className="py-16">
       <h2 className=" my-8 text-center text-6xl font-bebas tracking-wider font-bold">Lights Camera <span className=" text-primary-yellow"> Artrix</span> </h2>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        image={image1}
        title="image of israeli artist arts"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
       image={image1}
        title="image of israeli artist arts"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        image={image1}
        title="image of israeli artist arts"
        
        />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        image={image1}
        title="image of israeli artist arts"
      
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        image={image1}
        title="image of israeli artist arts"
        
        />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        image={image1}
        title="image of israeli artist arts"
       
      />
    </ul>
</section>
  );
}

interface GridItemProps {
  area: string;
  title:string
    image:StaticImageData
}

const GridItem = ({ area, title,image }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
        <Link href="https://youtu.be/d3n8u3vwGZY?si=GwdYOAaDBnKiG6Qd"  >
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
        <Image src={image} alt={title} height={600} width={600} className=" w-full h-full   object-cover"/>
        </div>
      </div>
          </Link>
    </li>
  );
};


// export default VideoDisplay;