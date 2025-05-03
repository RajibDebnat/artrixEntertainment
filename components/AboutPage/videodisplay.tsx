"use client";

import { GlowingEffect } from "@/components/animate-components/glowing-effect";
import image1 from "@/public/video-thumbanil/image.webp"; // Not used in iframe layout but retained if needed
import { StaticImageData } from "next/image";

export default function VideoDisplay() {
  return (
    <section id="video-display" className="py-16">
      <h2 className="my-8 text-center text-6xl max-md:text-5xl max-sm:text-4xl font-bebas tracking-wider font-bold">
        Lights Camera <span className="text-primary-yellow">Artrix</span>
      </h2>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          title="Video 1"
          videoId="d3n8u3vwGZY"
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          title="Video 2"
          videoId="s05iQAALKvb3n95C"
        />
        {/* ✅ Center full-height item */}
        <GridItem
          area="md:[grid-area:2/1/4/13] xl:[grid-area:1/5/3/8]"
          title="Video 3"
          videoId="PjAeu8Xbuh4g3tnv"
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          title="Video 4"
          videoId="kgB4mmekf6_orYDq"
        />
      
        <GridItem
          area="md:[grid-area:3/7/4/13] xl:[grid-area:2/8/3/13]"
          title="Video 6"
          videoId="83RXYrqRLeM&t=7677s"
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  title: string;
  videoId: string;
}

const GridItem = ({ area, title, videoId }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </li>
  );
};
