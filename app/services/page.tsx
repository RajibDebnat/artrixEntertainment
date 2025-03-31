import Services from "@/components/Services";
import Hero from "@/components/services/hero";
import React from "react";


function page() {
  return (
    <main className=' p-10 max-lg:p-6 max-md:p-4  max-sm:p-2 overflow-x-hidden '>
     <Hero/>
     <Services/>
    </main>
  );
}

export default page;
