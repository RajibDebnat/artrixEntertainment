import Image from "next/image";
import HomeComponent from "../components/Home";
import { FloatingNav } from "@/components/animate-components/floating-navbar";
import { navbar } from "@/lib/data";
import Category from "@/components/Category";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import OurNetwork from "@/components/OurNetwork";
import {ProcessSection} from "../components/Process";
import SuccessStory from "@/components/SuccessStory";
export default function Home() {
  return (
    <main className=" relative py-0 p-10 max-sm:p-4 overflow-x-clip bg-black">
      {/* <Nav /> */}
      <Header />
      <FloatingNav navItems={navbar} />
      <HomeComponent />
      <AboutUs/>
      <Services/>
      <Category />
      <WhyChooseUs/>
      <OurNetwork/>
      <ProcessSection/>
      <SuccessStory />
    </main>
  );
}
  