import { GALLERY } from "@/app/constant";
import Image from "next/image";
import React from "react";

interface CompanyLogo {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:px-28 md:py-10 bg-gray-200/30">
      <h3 className="text-4xl text-center py-5 text-red-700">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-10 px-10">
        {GALLERY?.map((item: CompanyLogo) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={500}
            height={350}
            className="h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
