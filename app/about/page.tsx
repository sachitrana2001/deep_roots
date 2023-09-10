'use client';
import Story from '@/components/features/story';
import ImageSlider from '@/components/molcule/slider';

export default function page() {
  const StoryData = [
    {
      title: 'Year in business',
      svg: '/assets/star.svg',
      num: 3,
      color: 'red',
    },
    {
      title: 'Clients served',
      svg: '/assets/users.svg',
      num: 20,
      color: 'indigo',
    },
    {
      title: 'Events done',
      svg: '/assets/rocket.svg',
      num: 70,
      color: 'blue',
    },
  ];
  const images = [
    {
      id: 1,
      src: '/assets/Ultratech-Cement-Logo-PNG.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/assets/dlf.png',
      alt: 'Image 2 ',
    },

    {
      id: 3,
      src: '/assets/dainik-bhaskar-logo.svg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: '/assets/lg.svg',
      alt: 'Image 4',
    },
  ];
  return (
    <main>
      <section className="w-[100%] h-[300px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg4.png')] bg-cover lg:h-[400px]">
        <div className="w-full h-full flex flex-col  justify-center items-center ">
          <span className="text-white text-4xl md:text-6xl text-center">Our Story</span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      <section className="w-[100%] flex flex-col align-left px-5 md:px-24 py-10 ">
        <Story StoryData={StoryData} />
      </section>
      <section className="w-[100%] px-5 lg:h-[400px] lg:px-24">
        <p className="text-4xl font-semibold md:text-center md:text-5xl">BIGGEST BRANDS TRUST DEEPROOTS</p>
        <ImageSlider
          slideClass="p-20 "
          class="h-[250px] m-10 shadow-xl rounded-xl "
          images={images}
          imageClass="hover:scale-110 transition-all duration-2000 cursor-pointer p-10 w-96 h-48"
          breakpoints={true}
        />
      </section>
    </main>
  );
}
