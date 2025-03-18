import React from "react";
import Marquee from "react-fast-marquee";
function OurNetwork() {
  return (
    <section
      id="Our Network"
      className=" max-sm:px-2  mt-10 max-md:mt-5 max-sm:mt-2 px-10 overflow-x-hidden rounded-xl"
    >
      <h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">
        Our <span className=" text-primary-yellow"> Network</span>
      </h2>
      <Marquee className=" gap-4 h-36 rounded-xl  overflow-y-hidden   items-center text-slate-800">
        <h1 className="  max-sm:text-5xl   px-4  mx-6 text-6xl font-bold font-bebas tracking-wider text-primary-yellow ">
          {" "}
          Artrix Entertainment
        </h1>
        <h1 className=" px-4   max-sm:text-5xl  mx-6 text-6xl font-bold font-bebas tracking-wider text-primary-yellow ">
          {" "}
          ARTISTS AND TALENTS{" "}
        </h1>
        <h4 className=" font-roboto text-3xl text-slate-500 font-semibold">
          {" "}
          Renowned musicians, comedians, and performers who bring energy and
          excellence to any event.
        </h4>
        <h1 className="px-4   max-sm:text-5xl  text-primary-yellow  mx-6 text-6xl font-bold font-bebas tracking-wider ">
          {" "}
          INFLUENCERS{" "}
        </h1>
        <h4 className="  font-roboto text-3xl text-slate-500 font-semibold">
          {" "}
          A wide pool of social media influencers who engage audiences
          authentically.
        </h4>

        <h1 className="px-4   max-sm:text-5xl   text-primary-yellow mx-6 text-6xl font-bold font-bebas tracking-wider ">
          {" "}
          BRAND PARTNERS{" "}
        </h1>
        <h4 className=" font-roboto text-3xl text-slate-500 font-semibold">
          {" "}
          Trusted relationships with top brands, ensuring impactful
          collaborations.
        </h4>
      </Marquee>
    </section>
  );
}

export default OurNetwork;
