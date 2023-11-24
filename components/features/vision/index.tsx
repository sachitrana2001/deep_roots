import Image from 'next/image';

export default function Vision() {
  return (
    <section className="px-5 py-10 md:px-32">
      <h3 className="text-center text-2xl md:text-3xl pt-5">Exceptional Events, Every Time </h3>
      <p className="text-center text-xl  text-slate-500 pt-5">
        – Because Your Occasion Deserves Perfection
      </p>
      <main className=" md:h-[60vh] grid md:grid-cols-8 md:grid-rows-2 gap-4 py-10">
        <div className="md:col-span-4 md:row-span-2 relative">
          <Image
            src="/assets/bg2.png"
            width={600}
            height={400}
            alt="Image Alt"
            className="w-full h-full object-cover hover:scale-95 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold">Your Text Goes Here</h1>
          </div>
        </div>
        <div className="md:row-span-1 md:col-span-4 relative">
          <Image
            src="/assets/L2.jpeg"
            width={1000}
            height={400}
            alt="Image Alt"
            className="w-full h-full object-cover hover:scale-95 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl font-bold">Your Text Goes Here</h1>
          </div>
        </div>
        <div className="md:col-span-2 relative">
          <Image
            src="/assets/th.jpeg"
            width={600}
            height={400}
            alt="Image Alt"
            className="w-full h-full object-cover hover:scale-95 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-2xl font-bold">Your Text Goes Here</h1>
          </div>
        </div>
        <div className="md:col-span-2 relative">
          <Image
            src="/assets/bg5.jpg"
            width={600}
            height={400}
            alt="Image Alt"
            className="w-full h-full object-cover hover:scale-95 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-2xl font-bold">Your Text Goes Here</h1>
          </div>
        </div>
      </main>
    </section>
  );
}
