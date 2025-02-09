"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
const achievmentsList = [
  {
    metric: "Project",
    value: "7",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100.000",
  },
  {
    metric: "Certificate",
    value: "9",
  },
  {
    metric: "Years of Experience",
    value: "2",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-auto xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border-t-2 border-b-2 rounded-md py-8 px-auto flex flex-row items-center justify-between gap-4">
        {achievmentsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 mx-auto "
            >
              <h2 className=" text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="id-ID"
                  className="text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                      key: `animation-config-${index}`,
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
