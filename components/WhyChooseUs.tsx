import React from 'react'

import { cn } from "@/lib/utils";
import { HoverEffect } from './ui/card-hover-effect'
import {whyChooseUs} from '../lib/data';
import Image from 'next/image';
import logo from "../public/logo.png";
import Reveal from './animate-components/Reveal';
function WhyChooseUs() {
  return (
    <section>
      
       <div className="relative flex w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">

      </div>
<div>
<h2 className=" relative z-20 text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">Why <span className='text-primary-yellow'>Choose</span><Image src={logo} alt="artrix entertainment logo image" height={100} width={100} className=" inline-block rounded-full"/> Us</h2>

    <div className="max-w-5xl mx-auto px-8 max-sm:px-0">
        <Reveal width='content-fit' direction='y'>

      <HoverEffect items={whyChooseUs} />
        </Reveal>
    </div>
    </div>
</div>
    </section>
  )
}

export default WhyChooseUs



