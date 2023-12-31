

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
      <section className="w-[100%] h-[300px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg5.jpg')] bg-cover lg:h-screen">
        <div className="w-full h-full flex flex-col  justify-center items-center bg-blue-600/30 backdrop-brightness-75">
          <span className="text-white text-2xl px-10 md:text-4xl leading-loose text-center md:px-48">
                      A FRESH<span className="text-red-400 ">+Creative</span> APPROACH 
                      <p className="text-xl font-semibold md:text-2xl md:mt-3">TO MAKING YOUR VISION A REALITY.</p>
                  </span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      
    </main>
  );
}
