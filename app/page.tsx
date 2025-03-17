import Image from "next/image";
import HomeComponent from "../components/Home";
import { FloatingNav } from "@/components/animate-components/floating-navbar";
import { navbar } from "@/lib/data";
import Category from "@/components/Category";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className=" relative pb-0 p-10 max-sm:p-4 overflow-x-clip bg-black">
      {/* <Nav /> */}
      <FloatingNav navItems={navbar} />
      <HomeComponent />
      <AboutUs/>
      <Services/>
      <Category />
      <WhyChooseUs/>
    </main>
  );
}
  