import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" mt-10 rounded-xl bg-slate-900 text-white py-8 px-4 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between max-sm:items-start items-center">
        {/* Left Side - Logo and Description */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Company Logo"
              height={100}
              width={100}
              className=" rounded-full h-12 w-12"
            />
            <span className="text-3xl font-bold tracking-widest font-bebas ">Artrix <span className=" text-primary-yellow  text-xl">Entertainment</span> </span>
          </div>
          <p className="mt-2 font-roboto text-sm max-w-xs">
            Bringing the best in live experiences with artist curation,
            production solutions, brand collaborations, and celebrity
            management.
          </p>
        </div>

        {/* Middle - Services */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2 tracking-widest  font-bebas">Services</h2>
          <ul className="space-y-1 text-sm font-roboto">
  <li>
    <Link href="/services/artistcuration" className="hover:text-primary-yellow">
      Artist Curation
    </Link>
  </li>
  <li>
    <Link href="/services/liveproduction" className="hover:text-primary-yellow">
      Live Production Solutions
    </Link>
  </li>
  <li>
    <Link href="/services/brandcollabe" className="hover:text-primary-yellow">
      Brand Collaboration
    </Link>
  </li>
  <li>
    <Link href="/services/celebrity-management" className="hover:text-primary-yellow">
      Artist & Celebrity Management
    </Link>
  </li>
</ul>
        </div>

        {/* Right Side - Contact Details */}
        <div className="text-sm">
          <h2 className="text-xl font-semibold mb-2 tracking-widest  font-bebas">Contact Us</h2>
          <p className=" font-roboto text-sm ">Email: info@company.com</p>
          <p className=" font-roboto text-sm ">Phone: +91 12345 67890</p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-white hover:text-cyan-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400">
              <FaEnvelope size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400">
              <FaPhone size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2025 Artrix Entertainment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
