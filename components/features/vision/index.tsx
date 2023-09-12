import Image from 'next/image';

export default function Vision() {
  return (
    <main className="h-full flex flex-col items-center py-8  px-5 md:flex-row  md:p-24 bg-[url('/assets/bg2.jpeg')] bg-center bg-no-repeat bg-cover">
      <aside className='md:w-[50%]  bg-purple-50 backdrop-brightness-75 bg-cover  p-5 opacity-70'>
        <section className='md:px-10'>
          <p className="text-3xl font-bold mb-5 md:text-5xl">Our Vision Of Customer</p>
          <p className='md:leading-loose text-lg'>
            “To be an innovative organization committed in pursuing excellence and success for
            customers through information technology”
          </p>
          <p className="my-3 md:leading-loose text-lg md:my-6">
            We believe the synergy between our customers’ visions and business strategies and our
            technology knowledge world create a dynamic platform to drive our customers’ businesses
            to greater heights.
          </p>
        </section>
      </aside>
      <aside className="w-[50%] mt-10 flex items-center justify-center md:-mt-10 md:ml-40 ">
        <Image src="/assets/vision.png" alt="visionImage" height={800} width={200} className='h-[250px] w-[150px] md:w-[300px] md:h-[500px] transition duration-300 ease-in-out hover:scale-110' />
      </aside>
    </main>
  );
}
