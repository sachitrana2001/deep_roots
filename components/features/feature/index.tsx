// components/FeatureSection.tsx

import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


interface FeatureSectionProps {
  features: { imageUrl: string }[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <div className="relative">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <img src={feature.imageUrl} alt={`Feature ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSection;
