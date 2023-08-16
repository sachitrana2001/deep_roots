'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// 'swiper/css/swiper.css';
import Image from 'next/image';

interface ImageSliderProps {
  class?: string; // Use "class?" instead of "class:{}"
  images?: { id: number; src: string; alt: string; title?: string }[];
  slideClass?: string; // Use "slideclass?" instead of "slideclass:{}"
  imageClass?: string;
  arrow?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  class: customClass,
  images,
  slideClass,
  imageClass,
  arrow = false,
}) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={customClass}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index} className={slideClass}>
          <Image fill={true} src={image?.src} alt={image?.alt} className={imageClass} />
          <div className="absolute top-0 right-0 left-0 px-5 bottom-0 flex items-center font-semibold text-4xl justify-center py-12 text-[white]">
            {image?.title}
          </div>
          {arrow && (
            <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center py-12 text-[white] lg:bottom-0 ">
              <Image
                src="/assets/arrow-down.svg"
                alt="Logo"
                width={50}
                height={50}
                className="animate-bounce"
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
