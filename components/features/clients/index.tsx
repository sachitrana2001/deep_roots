import Image from 'next/image';

export default function Clients() {
  return (
    <main className="h-full flex flex-col items-center py-8  px-5 md:flex-row  md:p-24  bg-red-50 backdrop-brightness-75 ">
      <aside className="w-[50%] mt-10 flex items-center justify-center md:-mt-10 ">
        <Image
          src="/assets/clients.png"
          alt="visionImage"
          height={800}
          width={200}
          className="h-[200px] w-[100px] md:w-[300px] md:h-[500px] transition duration-300 ease-in-out hover:scale-110"
        />
      </aside>
      <aside className="mt-10 md:w-[50%]">
        <section className="md:px-10">
          <p className="text-3xl font-bold mb-5 md:text-5xl">
            Our Clients !<br />
            Our Strength !
          </p>
          <p className="md:leading-loose text-lg">
            We have been consistently adding value to the business bottom line. We not only help our
            clients to substantially bring down their costs, but also improve their business
            processes to get the most out of the flat world dynamics.
          </p>
        </section>
      </aside>
    </main>
  );
}
