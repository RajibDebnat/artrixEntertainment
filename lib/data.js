import {
  FaBullseye,
  FaRocket,
  FaTrophy,
  FaChartLine,
  FaStar,
  FaUser,
} from "react-icons/fa";
import artistcuration from "../public/service/Salman-Ali.webp";
import liveproduction from "../public/service/liveproduction.jpg";
import brandcollab from "../public/service/brandcollab.webp";
import celebrity from "../public/service/celebrity.jpg";
import asrani from "../public/successStory/asrani.jpg";
import guru from "../public/successStory/guru.jpg";
import jubin from "../public/successStory/jubin.jpg";
import karishma from "../public/successStory/karishma.jpg";
import madhuri from "../public/successStory/madhuri.jpg";
import pawandeep from "../public/successStory/pawandeep.jpg";
import pravudeva from "../public/successStory/pravudeva.jpg";
import raveena from "../public/successStory/raveena.jpg";
import salman from "../public/successStory/salman.png";
import shaan from "../public/successStory/Shaan.webp";
import sunil from "../public/successStory/sunil.jpg";
import hero1 from "../public/hero/hero.png";
import hero2 from "../public/hero/hero2.webp";
import hero3 from "../public/hero/hero3.webp";
import { HomeIcon, InfoIcon, SettingsIcon, PhoneIcon } from "lucide-react";
import artistmanagement from "../public/About-page/image1.png";
import BrandCollab2 from "../public/About-page/image2.png";
import artistcuration2 from "../public/About-page/image4.png";
import liveproduction2 from "../public/About-page/image3.png";
import { FaUsers,  FaEye } from "react-icons/fa";

import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const socialLinks = [
  { id: 'whatsapp', icon: FaWhatsapp, href: 'https://wa.me/your-number', color: 'text-primary-yellow' },
  { id: 'facebook', icon: FaFacebook, href: 'https://facebook.com/your-profile', color: 'text-primary-yellow' },
  { id: 'instagram', icon: FaInstagram, href: 'https://instagram.com/your-profile', color: 'text-primary-yellow' },
  { id: 'email', icon: FaEnvelope, href: 'mailto:your-email@example.com', color: 'text-yellow-500' },
];

export const successStory1 = [
  { id: "s1", image: asrani, name: "Govardhan Asrani" },
  { id: "s2", image: guru, name: "Guru Randhawa" },
  { id: "s3", image: jubin, name: "Jubin Nautiyal" },
  { id: "s4", image: karishma, name: "Karisma Kapoor" },
  { id: "s5", image: madhuri, name: "Madhuri Dixit" },
  { id: "s6", image: pawandeep, name: "Pawandeep Rajan" },
  { id: "s7", image: pravudeva, name: "Prabhu Deva" },
  { id: "s8", image: raveena, name: "Raveena Tandon" },
  { id: "s9", image: salman, name: "Salman Ali" },
  { id: "s10", image: shaan, name: "Shaan" },
  { id: "s11", image: sunil, name: "Sunil Veerappa Shetty" },
];
export const artistNames = [
  'Arijit Singh',
  'Neha Kakkar',
  'Honey Singh',
  'Lata Mangeshkar',
  'Shreya Ghoshal',
  'Atif Aslam',
  'Kishore Kumar',
  'Sonu Nigam',
  'A.R. Rahman',
  'Kumar Sanu',
  'Rahat Fateh Ali Khan',
  'Mohit Chauhan',
  'Badshah',
  'Adele',
  'Beyoncé',
  'Taylor Swift',
  'Ed Sheeran',
  'Drake',
  'Justin Bieber',
  'Eminem',
  'Govardhan Asrani',
  'Guru Randhawa',
  'Jubin Nautiyal',
  'Karisma Kapoor',
  'Madhuri Dixit',
  'Pawandeep Rajan',
  'Prabhu Deva',
  'Raveena Tandon',
  'Salman Ali',
  'Shaan',
  'Sunil Veerappa Shetty'
];


export const successStory2 = [
  { id: "s12", image: guru, name: "Guru Randhawa" },
  { id: "s13", image: jubin, name: "Jubin Nautiyal" },
  { id: "s14", image: salman, name: "Salman Ali" },
  { id: "s15", image: karishma, name: "Karisma Kapoor" },
  { id: "s16", image: madhuri, name: "Madhuri Dixit" },
  { id: "s17", image: pravudeva, name: "Prabhu Deva" },
  { id: "s18", image: pawandeep, name: "Pawandeep Rajan" },
  { id: "s19", image: raveena, name: "Raveena Tandon" },
  { id: "s20", image: asrani, name: "Govardhan Asrani" },
  { id: "s21", image: shaan, name: "Shaan" },
  { id: "s22", image: sunil, name: "Sunil Veerappa Shetty" },
];
export const navbar = [
  { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
  { name: "About", link: "/about-us", icon: <InfoIcon size={20} /> },
  { name: "Services", link: "/services", icon: <SettingsIcon size={20} /> },
  { name: "Contact", link: "/contact", icon: <PhoneIcon size={20} /> },
];

export const services = [
  {
    id: "celebrity",
    heading: "Artist & Celebrity Management",
    para: "artists and celebrities with strategic management, seamless coordination, and unparalleled opportunities to elevate their brand and presence.",
    link: "services/celebrity-management",
    image: celebrity,
  },
  {
    id: "artistcuration1",
    heading: "Artist Curation",
    para: "Curating unforgettable live performances.Talent management, stage design, andexecution.",
    link: "services/artistcuration",
    image: artistcuration,
  },
  {
    id: "liveproduction2",
    heading: "Live Production Solutions",
    para: "Experience the power of real-time creativity with our cutting-edge live production services. ",
    link: "services/liveproduction",
    image: liveproduction,
  },
  {
    id: "brandcollab3",
    heading: "Brand Colaboration",
    para: "Creating immersive brand experiences.Strategic brandcampaigns tailored to your goals.",
    link: "services/brandcollabe",
    image: brandcollab,
  },
];

// const Services =

export const whyChooseUs = [
  {
    link: "services",
    id: "tailored-approach",
    title: "Tailored Approach",
    icon: <FaBullseye />,
    description:
      "We understand that every brand and event is unique. Our solutions are custom-built to reflect your vision and values.",
  },
  {
    link: "services",
    id: "innovation-meets-execution",
    title: "Innovation Meets Execution",
    icon: <FaRocket />,
    description:
      "Our creative strategies are backed by flawless execution, ensuring every detail aligns with your objectives.",
  },
  {
    link: "services",
    id: "proven-expertise",
    title: "Proven Expertise",
    icon: <FaTrophy />,
    description:
      "With years of experience, our team has successfully delivered diverse projects across industries.",
  },
  {
    link: "services",
    id: "result-oriented",
    title: "Result-Oriented",
    icon: <FaChartLine className="" />,
    description:
      "We prioritize measurable outcomes to ensure your investment yields tangible results.",
  },
  {
    link: "services",
    id: "exclusive-access",
    title: "Exclusive Access",
    icon: <FaStar />,
    description:
      "Access to leading artists, influencers, and sponsors to amplify your event or campaign.",
  },
];
export const heroImage = [
  {
    image: hero1,
    alt: "hero image. actor & singer performing on stage",
  },
  {
    image: hero2,
    alt: "hero image. actor & singer performing on stage",
  },
  {
    image: hero3,
    alt: "hero image. actor & singer performing on stage",
  },
];
export const products = [
  {
    title: "Artist Curation",
    link: "services/artist-curation",
    thumbnail: artistcuration2.src,
  },
  {
    title: "Live Production Solutions",
    link: "services/live-production",
    thumbnail: liveproduction2.src,
  },
  {
    title: "Artist & Celebrity Management",
    link: "services/celebrity-management",
    thumbnail: artistmanagement.src,
  },
  {
    title: "Brand Collaboration",
    link: "services/brand-collaboration",
    thumbnail:BrandCollab2.src,
  },
  {
    title: "Artist & Celebrity Management",
    link: "services/celebrity-management",
    thumbnail: artistmanagement.src,
  },
  {
    title: "Artist Curation",
    link: "services/artist-curation",
    thumbnail: artistcuration2.src,
  },
  {
    title: "Brand Collaboration",
    link: "services/brand-collaboration",
    thumbnail:BrandCollab2.src,
  },
  {
    title: "Live Production Solutions",
    link: "services/live-production",
    thumbnail: liveproduction2.src,
  },
  {
    title: "Artist Curation",
    link: "services/artist-curation",
    thumbnail: artistcuration2.src,
  },
  {
    title: "Live Production Solutions",
    link: "services/live-production",
    thumbnail: liveproduction2.src,
  },
  {
    title: "Artist & Celebrity Management",
    link: "services/celebrity-management",
    thumbnail: artistmanagement.src,
  },
  {
    title: "Brand Collaboration",
    link: "services/brand-collaboration",
    thumbnail:BrandCollab2.src,
  },
  {
    title: "Artist & Celebrity Management",
    link: "services/celebrity-management",
    thumbnail: artistmanagement.src,
  },
  {
    title: "Artist Curation",
    link: "services/artist-curation",
    thumbnail: artistcuration2.src,
  },
  {
    title: "Brand Collaboration",
    link: "services/brand-collaboration",
    thumbnail:BrandCollab2.src,
  },
  {
    title: "Live Production Solutions",
    link: "services/live-production",
    thumbnail: liveproduction2.src,
  },
  

];
export const words = [
  {
    text: "Know",
    className: "font-bebas text-7xl tracking-wider",
  },
  {
    text: "About",
    className: "font-bebas text-7xl tracking-wider",
  },
  {
    text: "Artrix",
    className: "text-primary-yellow font-bebas text-7xl tracking-wider",
  },
 
  {
    text: "Entertainment.",
    className: "text-primary-yellow font-bebas text-7xl tracking-wider",
  },
];
   export const aboutUs = [
  {
    id: "1",
    title: "Who We Are",
    description: "Artrix Entertainment is an innovative entertainment consultancy designed to cater to all your even and branding needs. From live entertainment to influencer marketing, we are your trusted partner for seamless, impactful experiences.",
    image: FaUsers,
  }, 
  {
    id: "2",
    title: "Our Mission",
    description: "To bridge the gap between creativity and strategy, delivering unique solutions that resonate with  and achieve your objectives. ",
    image: FaBullseye,
  }, 
  {
    id: "3",
    title: "Our Vision",
description: "To redefine entertainment consultancy by setting a gold standard in delivering memorable experiences and measurable results.",
    image: FaEye,
  }, 
 ]