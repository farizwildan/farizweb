"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-300">
              Hello I'm, {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Fariz",
                1000,
                "Fullstack Dev",
                1000,
                "UI/UX Designer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <ul className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {" "}
            <li>Hello Everyone!! Welcome to my personal portofolio website</li>
            <li>The Programmers that you need!</li>
          </ul>
          <div>
            <a
              href="https://wa.me/6281327965013"
              target="_blank" // Untuk membuka di tab baru
              rel="noopener noreferrer" // Untuk alasan keamanan saat membuka di tab baru
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-violet-500 to-red-500 hover:bg-slate-200">
                Hire me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1lq8w3drjJmMzRCl__YQzALh-yg47_401/view?usp=sharing"
              target="_blank" // Untuk membuka di tab baru
              rel="noopener noreferrer" // Untuk alasan keamanan saat membuka di tab baru
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-red-500 hover:bg-slate-800 mt-3">
                <span className="block bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div>
            <motion.svg
              className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
              fill="transparent"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="200px"
                cy="200px"
                r="200"
                stroke="#4bc9f3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <foreignObject
                x="1"
                y="10"
                width="380"
                height="390"
                className="absolute"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="rounded-full transition-transform duration-700 ease-in-out hover:scale-105"
                    width={450}
                    height={450}
                  />
                </div>
              </foreignObject>
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
