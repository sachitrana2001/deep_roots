'use client';
import Story from '@/components/features/story';
import ImageSlider from '@/components/molcule/slider';
import { COMPANY_LOGOS } from '../constant';

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

  return (
    <main>
      <section className="w-[100%] h-[300px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg2.png')] bg-cover lg:h-[400px]">
        <div className="w-full h-full flex flex-col  justify-center items-center bg-blue-600/30 backdrop-brightness-75">
          <span className="text-white text-4xl md:text-6xl text-center">Our Story</span>
          <span className="text-white text-2xl md:text-4xl text-center">We Are Deep Roots</span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      <section className="w-[100%] flex flex-col align-left px-5 md:px-24 py-10 ">
        <Story StoryData={StoryData} />
        <p>Deep Roots is a firm which is established in Chandigarh since 2011. With its wings spread across all major cities to take care of the local co-ordination and management. With this unended journey, simultaneously we have collected a lot of experience and constantly upgraded our strengths in all areas of event execution and event management. With a team of young, creative, dynamic & dedicated professionals, we have pushed all areas of event management to new frontiers, whether it is artist management, product launch, Exhibition, Road-show, Fashion show. The urge to deliver more than the client’s expectations has always been our top priority. Hence, we are a “One stop shop” for any and every requirement to our wide spectrum of clients.</p>
      </section>
      <section className="w-[100%] px-5 lg:h-[400px] lg:px-24">
        <p className="text-4xl text-center font-semibold  md:text-5xl">BIGGEST BRANDS TRUST DEEPROOTS</p>
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
