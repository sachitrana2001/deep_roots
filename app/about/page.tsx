import Image from "next/image";

export default function page() {
    return(
        <main>
            <section className="w-[100%] h-screen bg-center bg-no-repeat overflow-hidden z-1 bg-[url('/assets/bg4.png')] bg-cover ">
      <div className="w-full h-full flex flex-col  justify-center items-center ">
                <span className="text-white text-4xl md:text-6xl text-center">Every Event Should be Perfect</span>
                {/* <span className="text-white text-center text-4xl mt-2 md:text-6xl  mt-5 md:p-0">We Can Help You</span> */}
        </div>
        <div className="absolute bottom-0  left-[49%] items-center justify-center hidden py-12 text-[white] lg:flex">
        <Image src="/assets/arrow-down.svg" alt="Logo"  width={50} height={50} className="animate-bounce"/>
        </div>
      </section> 
      <section className="w-[100%] flex flex-col align-left px-5 md:px-24 py-10 ">
        <h2 className="text-xl text-slate-400 mb-3">About Deeproots</h2>
        <h4 className="text-3xl font-semibold ">The Event Management Company</h4>
      </section>
      <section className="px-5 md:px-24 flex">
        <aside className="py-5">
            <p className="mb-4">Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatical reconceptualize synergistic channel whereas tactical community repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
            <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustainable innovation vis-a-vis economically sound paradigms.</p>
            
        </aside>
        <aside className="p-5">
            <p>Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatical reconceptualize synergistic channel whereas tactical community repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
            <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustainable innovation vis-a-vis economically sound paradigms.</p>
        </aside>
      </section>
        </main>
    )
}