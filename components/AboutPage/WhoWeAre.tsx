"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaBullseye, FaEye } from "react-icons/fa";
const WhoWeAre = () => {
    return (
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Us
          </h2>
  
          {/* WHO WE ARE */}
          <motion.div
            className="flex flex-col md:flex-row items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 text-6xl md:mr-6">
              <FaUsers />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We are a passionate team dedicated to delivering high-quality digital solutions. 
                Our focus is on innovation, creativity, and excellence.
              </p>
              <Link href="/services">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
  
          {/* OUR MISSION */}
          <motion.div
            className="flex flex-col md:flex-row items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-red-600 text-6xl md:mr-6">
              <FaBullseye />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our mission is to empower businesses with cutting-edge digital solutions 
                that drive growth, efficiency, and success.
              </p>
              <Link href="/services">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
  
          {/* OUR VISION */}
          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-green-600 text-6xl md:mr-6">
              <FaEye />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our vision is to be a global leader in digital transformation, shaping the future 
                of technology with innovative solutions.
              </p>
              <Link href="/services">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

export default WhoWeAre;
