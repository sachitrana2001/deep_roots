import Clients from '@/components/features/clients';
import Values from '@/components/features/values';
import Vision from '@/components/features/vision';
import ImageSlider from '@/components/molcule/slider';
import Image from 'next/image';

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
      {/* <Clients /> */}
    </main>
  );
}
