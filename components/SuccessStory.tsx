import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { successStory1 ,successStory2} from "@/lib/data";
import {cn} from "@/lib/utils";
function SuccessStory() {
  return (
<section>
<div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

    <div>
      <Marquee speed={80} className=" gap-10 rounded-xl">
        {successStory1.map((story) => (
          <div key={story.id} className="flex h-80 rounded-xl  mx-8 items-center space-x-4 gap-10">
            <Image
              src={story.image}
              alt={story.name}
              width={400}
              height={400}
              className=" w-full h-full   object-fill rounded-xl"
            />
          </div>
        ))}
      </Marquee>
      <div className="mt-10">

      <Marquee direction="right" speed={80} className=" gap-10 rounded-xl">
        {successStory2.map((story) => (
          <div key={story.id} className="flex h-80 rounded-xl  mx-8 items-center space-x-4 gap-10">
            <Image
              src={story.image}
              alt={story.name}
              width={400}
              height={400}
              className=" w-full h-full   object-fill rounded-xl"
              />
          </div>
        ))}
      </Marquee>
        </div>
    </div>
    </div>
</section>
  );
}

export default SuccessStory;
