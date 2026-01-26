"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import LuminaCrystal from "./LuminaCrystal";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-5 place-self-center mt-4 lg:mt-0 w-full order-1 sm:order-2 mb-10 sm:mb-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto">
            <motion.svg
              className="w-full h-full"
              fill="transparent"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="200"
                cy="200"
                r="195"
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
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="rounded-full shadow-2xl"
                width={350}
                height={350}
                priority
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start order-2 sm:order-1"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Hello, I'm{" "}
            </span>
            <br />
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-light">
            Welcome to my personal portfolio. I build accessible, pixel-perfect,
            and performant web experiences.
          </p>
          <div>
            <a
              href="https://wa.me/6281327965013"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/20">
                Hire me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1lq8w3drjJmMzRCl__YQzALh-yg47_401/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-200 mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>

      </div>
    </section >
  );
};

export default HeroSection;
