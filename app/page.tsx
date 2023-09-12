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
      title: 'Maximize Your ROI with Endless Event Management',
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
      {/* <section className="w-[100%] h-screen bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/background.jpeg')] bg-cover ">
        <div
          className="w-full h-full flex flex-col  justify-center items-center 
              px-10 md:px-0"
        >
          <span className="text-white text-4xl md:text-6xl text-center">
            Event Planning Is Hard
          </span>
          <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">
            We Can Help You
          </span>
        </div>
        <div className="absolute bottom-0  left-[49%] items-center justify-center hidden py-12 text-[white] lg:flex">
          <Image
            src="/assets/arrow-down.svg"
            alt="Logo"
            width={50}
            height={50}
            className="animate-bounce"
          />
        </div>
      </section> */}

      <Vision />
      <Clients />
      <Values />
    </main>
  );
}
