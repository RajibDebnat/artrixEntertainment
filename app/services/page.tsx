import Services from "@/components/Services";
import Hero from "@/components/services/hero";
import React from "react";
import { Spotlight } from "@/components/animate-components/Spotlight";
export const metadata = {
  title: "Artrix Entertainment Service | artist booking Services ",
  description: "Explore our taxi services between India and Bhutan. Safe, reliable, and comfortable travel.",
};
function page() {
  return (
    <main className=' relative p-10 max-lg:p-6 max-md:p-4  max-sm:p-2 overflow-x-clip'>
       <Spotlight className="-top-40 left-0  h-screen w-[50%] " fill="yellow" />
              
                    <Spotlight className=" top-0  right-full " />
                    <Spotlight
                      className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                      fill="white"
                    />
                    <Spotlight
                      className="top-10 left-full      h-[80vh] w-[50vw]"
                      fill="yellow"
                    />
                    <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="white" />
     <Hero/>
     <Services/>
    </main>
  );
}

export default page;
