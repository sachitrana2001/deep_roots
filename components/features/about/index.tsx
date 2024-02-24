import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <main className="h-full flex flex-col md:flex-row-reverse  py-10 gap-8  md:py-20 md:justify-center xl:px-64 md:h-screen md:gap-20">
      <section className="px-5 w-full md:w-2/5 ">
        <h3 className="text-5xl leading-snug  text-rose-700">
          Deeproots since 2011
        </h3>
        <p className="italic py-5 text-lg leading-relaxed">
          Deep Roots is a firm which is established in Chandigarh since 2011.
          With its wings spread across all major cities to take care of the
          local co-ordination and management. With this unended journey,
          simultaneously we have collected a lot of experience and constantly
          upgraded our strengths in all areas of event execution and event
          management.
        </p>
      </section>
      <section className="flex justify-start relative md:justify-center px-5">
        {/* <div className="absolute bg-rose-700 w-20 h-16 opacity-50 -top-10 -right-10"></div> */}
        <div className="absolute bg-rose-700 w-20 h-16 opacity-50 -bottom-10 -left-10"></div>
        <Image
          src="/assets/about1.png"
          width={350}
          height={600}
          alt="about"
          loading="lazy"
          className="brightness-75 rounded-tl-[100px] w-4/5 h-[60vh] md:h-full md:w-full"
        />
        <aside className="absolute w-2/3 text-base flex bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] -bottom-10 left-20 gap-4 p-2 md:w-[100%] md:-right-[400px]  md:text-2xl md:p-5">
          <div className="border-r-2 pr-5 border-black w-[100px] md:w-full">
            <p className="text-blue-800">20+</p>
            <p className="">Client Served</p>
          </div>
          <div className="border-r-2 border-black pr-5 w-[100px]  md:w-full">
            <p className="text-green-500">11+</p>
            <p>in Market</p>
          </div>
          <div className="w-[100px] md:w-full">
            <p className="text-red-600 w-[70px] md:w-full">70+</p>
            <p>Events done</p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default AboutSection;
