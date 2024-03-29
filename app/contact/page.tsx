"use client";

import { useState } from "react";
import ContactForm from "@/components/molcule/form";
import { motion } from "framer-motion";
import { SOCIAL_LOGO } from "../constant";
import Image from "next/image";
import FormFields from "@/components/molcule/form";

const CONTACT = [
  {
    title: "Address",
    discription: "chandigarh, India",
  },
  {
    title: "Phone",
    discription: "+91 9888804700",
  },
  {
    title: "Email",
    discription: "surender.kumar@deeproots.in",
  },
];

const ContactSection = () => {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <main>
      <section className="w-[100%] h-[300px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/ContactUs.jpg')] bg-cover lg:h-[400px]">
        <div className="w-full h-full flex flex-col  justify-center items-center bg-slate-900/20 backdrop-brightness-50">
          <span className="text-white text-2xl px-10 md:text-4xl leading-loose text-center md:px-48">
            Contact US
            <p className="text-xl font-semibold md:text-2xl md:mt-3">
              TO MAKING YOUR VISION A REALITY.
            </p>
          </span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      <section className="w-full my-20">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="pt-[10px]"
        >
          <motion.div
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              },
            }}
            className={
              "max-w-[1200px] flex flex-col justify-around p-4 md:flex-row mx-auto"
            }
          >
            <div className="max-w-[100%]  md:max-w-[500px]  flex justify-center items-center  ">
              <div>
                <p className="font-[700] w-full text-[36px] mb-[20px] text-primary ">
                  React Us? Please Drop a Message
                  <br />
                </p>
                <p className="mb-[36px] text-grey-light">
                  Get in touch and let me know how i can help. Fill out the form
                  and i will be in touch as soon as possible.
                </p>

                {CONTACT.map((contact, index) => {
                  return (
                    <div key={index} className="mb-[16px] flex">
                      {/* <div className="mr-[18px]"> {<contact.icon />}</div> */}
                      <ul>
                        <h3 className="font-[700] text-primary">
                          {contact.title}
                        </h3>
                        <li className="text-grey-light text-[14px]">
                          {contact.discription}
                        </li>
                      </ul>
                    </div>
                  );
                })}

                <div className="flex gap-3 my-[46px]">
                  {SOCIAL_LOGO.map((social, index) => {
                    return (
                      <a
                        className=" bg-primary h-[50px] w-[50px] flex justify-center items-center rounded-[50%] shadow-2xl"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <Image
                          className="mx-2 cursor-pointer animate-bounce"
                          key={social.name}
                          src={social.src}
                          alt={social.name}
                          width={30}
                          height={30}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" w-[100%] rounded-2xl shadow-xl bg-primary p-5 ">
              <FormFields />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactSection;
