import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-[100%] h-screen bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/background.jpeg')] bg-cover ">
      <div className="w-full h-full flex flex-col  justify-center items-center 
             bg-blue-600/30 backdrop-brightness-75 px-10 md:px-0">
                <span className="text-white text-4xl md:text-6xl text-center">Event Planning Is Hard</span>
                <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span>
        </div>
        <div className="absolute bottom-0  left-[49%] items-center justify-center hidden py-12 text-[white] lg:flex">
        <Image src="/assets/arrow-down.svg" alt="Logo"  width={50} height={50} className="animate-bounce"/>
        </div>
      </section>  
      <section className="w-[100%] h-screen bg-center bg-no-repeat overflow-hidden z-1 ">
      <div className="w-full h-full flex flex-col  justify-center items-center 
             bg-blue-600/30 backdrop-brightness-75 px-10 md:px-0">
                <span className="text-white text-4xl md:text-6xl text-center">Event Planning Is Hard</span>
                <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span>
        </div>
        <div className="absolute bottom-0  left-[49%] items-center justify-center hidden py-12 text-[white] lg:flex">
        <Image src="/assets/arrow-down.svg" alt="Logo"  width={50} height={50} className="animate-bounce"/>
        </div>
      </section>     
    </main>
  )
}
