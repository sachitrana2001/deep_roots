import Clients from "@/components/features/clients";
import Values from "@/components/features/values";
import Vision from "@/components/features/vision";
import ImageSlider from "@/components/molcule/slider";
import { COMPANY_LOGOS } from "./constant";
import Gallery from "@/components/features/gallery";
import Image from "next/image";
import { LazyMotion } from "framer-motion";

export default function Home(): JSX.Element {
  const images = [
    {
      id: 1,
      src: "/assets/bg2.png",
      alt: "Image 1",
      title: "Nationwide Event Management Services",
      color: "blue",
    },
    {
      id: 2,
      src: "/assets/bg3.png",
      alt: "Image 2",
      title: "Maximize Your ROI with Deeproots Event Management",
      color: "green",
    },
    {
      id: 3,
      src: "/assets/bg4.png",
      alt: "Image 3",
      title: "Expert Event Solutions",
      color: "blue",
    },
  ];
  return (
    <main>
      <div className="relative">
        <video autoPlay muted width={100} height={100} className="relative  w-screen">
          <source src="/videos/dlf.mp4" type="video/mp4" />
        </video>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl mb-4 md:text-4xl">
          <Image
            src="/whiteLogo.png"
            alt="Arrow Down"
            width={400}
            height={100}
            className="hidden md:block"
          />
        </p>
        {/* Description and arrow */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-white lg:bottom-0">
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/assets/arrow-down.svg"
              alt="Arrow Down"
              width={50}
              height={50}
              className="animate-bounce"
            />
          </div>
        </div>
      </div>
      {/* <ImageSlider
        arrow
        slideClass="h-screen"
        class="h-screen "
        images={images}
        imageClass="object-cover hover:scale-110 transition-all duration-2000 cursor-pointer "
      /> */}
      <Values />
      <Vision />
      <section className="w-[100%] px-5 py-10 lg:h-[400px] lg:px-24">
        <p className="text-4xl text-center font-semibold  md:text-3xl">
          BIGGEST BRANDS COLLAB WITH DEEPROOTS
        </p>
        <ImageSlider
          slideClass="p-20 "
          class="h-[250px] m-10 shadow-xl rounded-xl md:h-[250px]"
          images={COMPANY_LOGOS}
          imageClass="border-img  cursor-pointer p-10 w-96 h-48 object-contain"
          breakpoints={true}
        />
      </section>
      <Gallery />
    </main>
  );
}
