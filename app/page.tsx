import Clients from '@/components/features/clients';
import Values from '@/components/features/values';
import Vision from '@/components/features/vision';
import Why from '@/components/features/why';
import ImageSlider from '@/components/molcule/slider';
import Image from 'next/image';
import { COMPANY_LOGOS } from './constant';

export default function Home() {
  const images = [
    {
      id: 1,
      src: '/assets/bg2.png',
      alt: 'Image 1',
      title: 'Nationwide Event Management Services',
      color: 'blue',
    },
    {
      id: 2,
      src: '/assets/bg3.jpeg',
      alt: 'Image 2 ',
      title: 'Maximize Your ROI with Deeproots Event Management',
      color: 'green',
    },
    {
      id: 3,
      src: '/assets/bg4.jpg',
      alt: 'Image 3',
      title: 'Expert Event Solutions',
      color: 'blue',
    },
  ];
  return (
    <main>
      <ImageSlider
        arrow
        slideClass="h-screen"
        class="h-screen "
        images={images}
        imageClass="object-cover hover:scale-110 transition-all duration-2000 cursor-pointer "
      />
      <Values />
      <Vision />
      <Why />
      <section className="w-[100%] px-5 py-10 lg:h-[400px] lg:px-24">
        <p className="text-4xl text-center font-semibold  md:text-3xl">
          BIGGEST BRANDS COLLAB WITH DEEPROOTS
        </p>
        <ImageSlider
          slideClass="p-20 "
          class="h-[250px] m-10 shadow-xl rounded-xl md:h-[250px]"
          images={COMPANY_LOGOS}
          imageClass="hover:scale-110 transition-all duration-2000 cursor-pointer p-10 w-96 h-48 object-contain"
          breakpoints={true}
        />
      </section>
    </main>
  );
}
