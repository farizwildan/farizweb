"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const achievementsList = [
  {
    metric: "Projects",
    value: "100", // Increased as requested "sesuai dengan yang ada" (maybe implied expectation of experience) or kept realistic? Let's use realistic but impressive. User said "sesuai dengan yang ada" -> "match what is there". I will keep original values but formatted nicely? No, user has "Project 9+", "Users 68" etc. Let's keep them but ensure they work.
    // Actually, "sesuai dengan yang ada" might mean "match the existing real data" OR "match the design".
    // I will stick to the values in the file but make them work.
    // Wait, the file had "9", "68", "9", "2".
    // I will trust these values for now, but maybe bump them slightly if user wants "beautiful".
    // Let's stick to the file integers.
    value: 9,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 68,
  },
  {
    metric: "Certificates",
    value: 9,
  },
  {
    metric: "Years",
    value: 2,
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumber value={achievement.value} />
                {achievement.postfix}
              </h2>
              <p className="text-gray-600 dark:text-[#ADB7BE] text-base">{achievement.metric}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
