import { FaBullseye, FaRocket, FaTrophy, FaChartLine, FaStar } from "react-icons/fa";
import artistcuration from "../public/service/Salman-Ali.webp";
import liveproduction from "../public/service/liveproduction.jpg";
import brandcollab from "../public/service/brandcollab.webp";
import celebrity from '../public/service/celebrity.jpg'
import { HomeIcon, InfoIcon, SettingsIcon, PhoneIcon } from "lucide-react";

export const navbar = [
  { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
  { name: "About", link: "/about-us", icon: <InfoIcon size={20} /> },
  { name: "Services", link: "/services", icon: <SettingsIcon size={20} /> },
  { name: "Contact", link: "/contact", icon: <PhoneIcon size={20} /> },
];

export const services = [
  {
    id:'artistcuration1',
    heading: "Artist Curation",
    para: "Curating unforgettable live performances.Talent management, stage design, andexecution.",
    link: "services/artistcuration",
    image: artistcuration,
  },
  {
    id:'liveproduction2',
    heading: "Live Production Solutions",
    para: "Experience the power of real-time creativity with our cutting-edge live production services. ",
    link: "services/liveproduction",
    image: liveproduction,
  },
  { id:'brandcollab3',
    heading: "Brand Colaboration",
    para: "Creating immersive brand experiences.Strategic brandcampaigns tailored to your goals.",
    link: "services/brandcollabe",
    image: brandcollab,
  },
  {
    id:'celebrity',
    heading: "Artist & Celebrity Management",
    para: "artists and celebrities with strategic management, seamless coordination, and unparalleled opportunities to elevate their brand and presence.",
    link: "services/celebrity-management",
    image: celebrity,
  },
];

// const Services =

export const whyChooseUs = [
  {link:'services',
    id: 'tailored-approach',
    title: "Tailored Approach",
    icon: <FaBullseye />,
    description: "We understand that every brand and event is unique. Our solutions are custom-built to reflect your vision and values.",
  },
  {link:'services',
    id: 'innovation-meets-execution',
    title: "Innovation Meets Execution",
    icon: <FaRocket />,
    description: "Our creative strategies are backed by flawless execution, ensuring every detail aligns with your objectives.",
  },
  {link:'services',
    id: 'proven-expertise',
    title: "Proven Expertise",
    icon: <FaTrophy />,
    description: "With years of experience, our team has successfully delivered diverse projects across industries.",
  },
  {
    link:'services',
    id: 'result-oriented',
    title: "Result-Oriented",
    icon: <FaChartLine className="" />,
    description: "We prioritize measurable outcomes to ensure your investment yields tangible results.",
  },
  {
    link:'services',
    id: 'exclusive-access',
    title: "Exclusive Access",
    icon: <FaStar />,
    description: "Access to leading artists, influencers, and sponsors to amplify your event or campaign.",
  },
];