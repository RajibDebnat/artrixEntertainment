import Image from "next/image";
import { Meteors } from "./animate-components/meteors";
import ShineBtn from "./animate-components/ShineBtn";
import { FaArrowRightLong } from "react-icons/fa6";
import Reveal from "./animate-components/Reveal";
import logo from "../public/logo.png";
function AboutUs() {
  return (
    <section className=" relative  mt-6  overflow-hidden max-xs:p-0 p-10  max-lg:p-4">
      <div className=" flex   max-md:flex-col  basis-[50%] justify-center items-center gap-16  px-8 max-xl:px-4 max-xs:p-0 max-sm:gap-8">
       

   
        <div className=" w-[50%] max-xl:w-[70%] max-sm:w-full max-sm:flex max-sm:iteme-center  justify-center max-sm:flex-col max-xs:p-0">
        <Reveal width="" direction="y">
          <h2 className="  max-sm:text-center max-sm:text-[44px] max-lg:text-6xl mb-3 font-bebas text-7xl font-bold ">
            {" "}
            <span className=" text-primary-yellow">Who</span> We<Image src={logo} alt="artrix entertainment logo image" height={100} width={100} className=" inline-block rounded-full"/>  Are 
            <span className=" text-primary-yellow"> ?</span>
          </h2>
          <p className=" max-sm:text-center max-lg:text-sm mb-5 font-roboto leading-[1.3] text-slate-200 text-lg font-semibold">
            Artrix Entertainment is an innovative entertainment consultancy
            designed to cater to all your event and branding needs. From live
            entertainment to influencer marketing, we are your trusted partner
            for seamless, impactful experiences.
          </p>

          <ShineBtn link="about-us" className=" mx-auto flex gap-2">
            Learn more <FaArrowRightLong />
          </ShineBtn>
          </Reveal>
        </div>
       


        <div>
        <Reveal direction="x" width="" >
          <Image
            src={"/about.png"}
            className=" grayscale object-cover"
            alt="about section image public dancing in a concert"
            width={500}
            height={600}
            />
            </Reveal>
        </div>
      </div>

      <Meteors number={20} />
    </section>
  );
}

export default AboutUs;
