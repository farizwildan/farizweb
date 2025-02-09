"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaFigma,
} from "react-icons/fa";

import { RiNextjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-4">
        {/* HTML5 Skill */}
        <li className="flex items-center gap-2">
          <FaHtml5 className="text-orange-500 text-3xl" />
        </li>
        {/* CSS3 Skill */}
        <li className="flex items-center gap-2">
          <FaCss3 className="text-blue-500 text-3xl" />
        </li>
        {/* Bootstrap Skill */}
        <li className="flex items-center gap-2">
          <FaBootstrap className="text-purple-500 text-3xl" />
        </li>
        {/* JavaScript Skill */}
        <li className="flex items-center gap-2">
          <FaJs className="text-yellow-500 text-3xl" />
        </li>
        {/* React Skill */}
        <li className="flex items-center gap-2">
          <FaReact className="text-cyan-500 text-3xl" />
        </li>
        {/* Laravel Skill */}
        <li className="flex items-center gap-2">
          <FaLaravel className="text-red-500 text-3xl" />
        </li>
        {/* PHP Skill */}
        <li className="flex items-center gap-2">
          <FaPhp className="text-indigo-500 text-3xl" />
        </li>
        {/* Figma Skill */}
        <li className="flex items-center gap-2">
          <FaFigma className="text-pink-500 text-3xl" />
        </li>
        {/* Next.js Skill */}
        <li className="flex items-center gap-2">
          <RiNextjsLine className="text-gray-700 text-3xl" />
        </li>
        {/* MySQL Skill */}
        <li className="flex items-center gap-2">
          <SiMysql className="text-blue-600 text-3xl" />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>- Computer Engineering of Diponegoro University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>
          - User Interface / User Experience Designer at Diponegoro University
        </li>
        <li>- Lab Assistant at Diponegoro University</li>
        <li>
          - Frontend Dev and UI/UX Designer at Library SHS 1 Tunjungan Blora
        </li>
      </ul>
    ),
  },
  {
    title: "Certificate",
    id: "certificate",
    content: (
      <ul>
        <li>- Dicoding : Belajar Dasar Pemrograman Web</li>
        <li>- Member of Digistar Connect Goes to ITB</li>
        <li>- Database Programming with SQL by Oracle Academy</li>
        <li>- Certificate IT Series: UI/UX</li>
        <li>- Introduction to IoT by Cisco, Oracle Academy</li>
        <li>- IT Essentials Course issued by Cisco</li>
        <li>- CCNA: Introduction to Networks Course issued by Cisco</li>
        <li>
          - CCNA: Switching, Routing, and Wireless Essentials Course issued by
          Cisco
        </li>
        <li>- Leadership Training Teknik Komputer - Diponegoro University</li>
      </ul>
    ),
  },
];

const AboutSection = ({ id }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="" id={id}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/download.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 mt-3">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi there! I’m Fariz Wildan Meiawan, with a passion for being Full
            Stack Development and UI/UX Design. I have experience working with
            HTML, CSS, JavaScript, React, Nextjs, Bootstrap, Tailwind CSS,
            Laravel, MySQL and Figma. I’m a quick learner and always eager to
            improve my skills and expand my knowledge. I'm enjoy collaborating
            in teams to solve problems and create impactful solutions. Let’s
            connect and bring great ideas to life!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificate")}
              active={tab === "certificate"}
            >
              {""}
              Certificate{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
