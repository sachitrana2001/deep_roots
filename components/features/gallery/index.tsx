import { GALLERY } from '@/app/constant';
import React from 'react';

interface CompanyLogo {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:px-28 md:py-10">
      <h3 className="text-3xl text-center py-5 text-red-400">Gallery</h3>
      <div className="grid md:grid-cols-3 gap-8 py-10 px-10">
        {GALLERY?.map((item: CompanyLogo) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={500}
            height={500}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
