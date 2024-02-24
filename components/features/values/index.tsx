"use client";
import React from "react";
import { HOME } from "@/app/constant";
import { motion } from "framer-motion";

const Values: React.FC = () => {
  return (
    <section className="w-full bg-[#F2F2F2] flex flex-col justify-center bg-primary-50 px-5 py-10 md:py-10  lg:px-28">
      <div className="flex flex-col justify-center items-center text-center  py-10">
        <h3 className="text-3xl pb-5 font-bold">
          Turning your dreams into unforgettable events
        </h3>
        <p className="text-xl pb-5 text-slate-500 ">
          Our approach to event planning is collaborative, thoughtful,
          strategic, detailed, and honest.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 lg:pb-20">
        {HOME.map((item, i) => (
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 0.5, // Animation duration
              },
            }}
            viewport={{ once: false }}
            className={`relative rounded-xl bg-cover bg-center bg-${item.bgImage} shadow-lg p-5`}
            key={i}
          >
            <div
              className={`absolute inset-0 bg-${item.color}-700 opacity-75 rounded-xl `}
            ></div>
            <div className={`relative z-10 hover:bg-${item.color}-100`}>
              <span className="text-white animate-bounce">{item.icon}</span>{" "}
              <br />
              <br />
              <span className="text-xl text-white">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Values;
