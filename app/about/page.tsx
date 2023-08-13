'use client';
import Story from '@/components/features/story';

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
      <section className="w-[100%] h-[300px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg4.png')] bg-cover lg:h-[400px]">
        <div className="w-full h-full flex flex-col  justify-center items-center ">
          <span className="text-white text-4xl md:text-6xl text-center">Our Story</span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      <section className="w-[100%] flex flex-col align-left px-5 md:px-24 py-10 ">
        <Story StoryData={StoryData} />
      </section>
    </main>
  );
}
