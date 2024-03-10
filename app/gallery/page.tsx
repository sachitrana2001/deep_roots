import Gallery from "@/components/features/gallery";

export default function page() {
  return (
    <main>
      <section className="w-[100%] h-[400px] bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg3.png')] bg-cover ">
        <div className="w-full h-full flex flex-col  justify-center items-center bg-slate-700/30 backdrop-brightness-50">
          <span className="text-white text-2xl px-10 md:text-4xl leading-loose text-center md:px-48">
            Making<span className="text-red-400 ">+dreams</span> Come True
            <p className="text-xl font-semibold md:text-2xl md:mt-3">
              BUILDING DREAMS FOR MORE THAN A DECADE
            </p>
          </span>
          {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
      </section>
      <Gallery />
    </main>
  );
}
