// Import Swiper React components
'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import { Autoplay } from "swiper/modules";

const CurvedSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 20 }).map((res, index) => (
        <SwiperSlide key={index}>
          <img
            alt=""
            key={index}
            src={`https://picsum.photos/seed/picsum${index}/300`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CurvedSlider
