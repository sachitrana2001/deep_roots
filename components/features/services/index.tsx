"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { isEvenMinute } from "@/app/utils";

const features = [
  {
    title: "ARTIST MANAGEMENT",
    img:"/assets/artist1.webp",
    img2: "/assets/artist2.webp",
    content: `Discover seamless artist management services that elevate your events to new heights. From coordinating performers and handling logistics to drawing contracts and providing technical expertise, we ensure a captivating and unforgettable experience for your audience. Trust our expertise to scout and bring exceptional talent, cater to backstage needs and create extraordinary moments that leave a lasting impression.`,
  },
  {
    title: "LED DISPLAY",
    img: "/assets/bg1.png",
    img2:"/assets/bg2.png",
    content: `Immerse yourself in the action with our cutting-edge LED screens in stadiums. Experience high-definition visuals, real-time updates, sponsor messages and captivating replays that enhance the thrill of the game. Be part of an unparalleled spectator experience that brings the stadium to life like never before.`,
  },
  {
    title: "Design & Branding",
    img: "/assets/bg1.png",
    content: `Elevate your events with our exceptional design and branding services. From captivating visuals to cohesive messaging, we create memorable experiences that leave a lasting impact. Join us to showcase your brand's unique story and connect with your audience in meaningful ways.`,
  },
  {
    title: "Hospitality",
    img: "/assets/bg4.png",
    content: `Welcome to our stadium, where you'll experience unmatched sporting league hospitality with premium seating, top-notch catering, and a vibrant atmosphere celebrating the essence of the game. We've expanded into the restaurant business, now managing the RCB Bar and Café in Bengaluru, to create unforgettable experiences for passionate sports enthusiasts.`,
  },
  {
    title: "Production",
    img: "/assets/bg5.png",
    content: `Elevate your events with our comprehensive event solutions. From expert production and precise fabrication to seamless infrastructure and top-notch technical support, we ensure an immersive and unforgettable experience for all attendees. Trust our meticulous planning and execution to create remarkable events that leave a lasting impact.`,
  },
  {
    title: "M.I.C.E",
    img: "/assets/bg5.png",
    content: `Elevate your business gatherings with our exceptional MICE event solutions. From tailored meeting spaces and seamless logistics to engaging conferences and immersive exhibitions, we create impactful experiences for professionals worldwide. Trust our expertise to deliver memorable and successful MICE events that drive connections and foster growth.`,
  },
  {
    title: "Wedding Planning",
    img: "/assets/bg5.png",
    content: `Transform your dream wedding into reality with our expert wedding planning services. From venue selection and vendor coordination to personalized touches and flawless execution, we ensure your special day is a seamless and unforgettable celebration. Trust us to handle every detail, allowing you to cherish every moment with your loved ones.`,
  },
];

const ServicesSection = () => {
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        setScreenSize(
          window.innerWidth > 1260
            ? "large"
            : // : window.innerWidth > 1024
              // ? "small"
              "small"
        );
      }
    }, 0);
  }, []);

  return (
    <div className="bg-white py-10 relative grid gap-y-20 md:gap-y-32 lg:gap-y-44 overflow-hidden md:py-64">
      {features.map((feature, i) => (
        <div
          className="flex flex-col lg:grid grid-cols-12 gap-6 lg:gap-9 relative z-10 px-8 md:px-20 xl:px-[104px] "
          key={`${feature.title}-${i}`}
        >
          {/* ====== BACKGROUND SHAPE START ====== */}
          <div
            className={`absolute items-center h-full w-full hidden lg:grid grid-cols-12 gap-12 lg:gap-9 `}
          >
            <motion.div
              initial={{ x: i%2 === 1 ? 500 : -500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`h-[55%] lg:h-[70%] w-full bg-rose-700 col-span-12 ${
                i%2 === 1
                  ? "lg:col-start-8 lg:col-end-13 "
                  : "lg:col-span-6 xl:col-span-5 "
              }`}
            ></motion.div>
          </div>
          {/* ====== BACKGROUND SHAPE END ====== */}

          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-5 relative h-[280px] sm:h-[340px] p mx-auto ${
              i%2 === 1 ? "order-1 lg:order-2 " : ""
            }`}
          >
            <img
              alt={feature.title}
              src={isEvenMinute() && feature.img2 ? feature?.img2 :feature?.img }
              className={`cursor-pointer w-full h-full object-cover sm:max-w-[420px] border-8 border-black hover:scale-100`}
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-7 my-auto text-offWhite ${
              i%2 === 1 ? "order-2 lg:order-1" : ""
            }`}
          >
            <motion.div
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                damping: 8,
                stiffness: 40,
              }}
              whileInView={
                screenSize === "large"
                  ? {
                      x: i === 1 ? [-600, 0] : [600, 0],
                      opacity: [0, 1],
                    }
                  : {
                      x: i === 1 ? [-100, 0] : [100, 0],
                      opacity: [0, 1],
                    }
              }
            >
              <h3 className="mb-4 text-2xl font-extrabold text-rose-700 md:mb-8">
                {feature.title}
              </h3>

              <p className="mb-2 text-lg font-medium ">{feature.content}</p>
            </motion.div>
          </div>
        </div>
      ))}

      <div className="w-full clip-bottom"></div>
    </div>
  );
};

export default ServicesSection;
