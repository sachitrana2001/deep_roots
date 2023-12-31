import { NAV_LINKS } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LOGO } from '@/app/constant';
const Footer = () => {
  const GALLERY_IMAGES = [
    {
      id: 1,
      src: '/assets/bg1.png',
      alt: 'Image 1',
      title: 'Nationwide Event Management Services',
    },
    {
      id: 2,
      src: '/assets/bg2.png',
      alt: 'Image 2 ',
      title: 'Maximize Your ROI with Endless Event Management',
    },
    {
      id: 3,
      src: '/assets/bg4.png',
      alt: 'Image 3',
      title: 'Expert Event Solutions',
    },
    {
      id: 4,
      src: '/assets/bg3.png',
      alt: 'Image 1',
      title: 'Nationwide Event Management Services',
    },
  ];
  return (
    <>
      <main className="bg-black text-white justify-between px-5 py-10 grid grid-rows-3 md:grid-cols-3  md:grid-rows-1 content-center gap-4 md:px-32 py-5">
        <section className="flex flex-col justify-center items-center">
          <Image
            src="/whiteLogo.png"
            alt="deep_roots_logo"
            width={300}
            height={230}
            className="md:h-40"
          />
          <p className="text-center md:text-base">
            The Event Company is the premier event design + production company that specializes in
            corporate, nonprofit + social events. #WeBuildDreams
          </p>
        </section>
        <section className="flex flex-col justify-center items-center m-5">
          <ul className="hidden md:grid grid-cols-3 content-center ml-10 flex items-baseline space-x-4">
            {NAV_LINKS.map((navlink, index) => {
              return (
                <li key={index}>
                  <Link className="border-animation-white text-xl" href={navlink.route}>
                    {navlink.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-4xl text-orange-300 m-10">Follow Us</p>
          <div className="flex justify-around">
            {SOCIAL_LOGO?.map((image) => (
              <img
                className="mx-2 cursor-pointer"
                key={image.name}
                src={image.src}
                alt={image.name}
                width={30}
                height={30}
              />
            ))}
          </div>
        </section>
        <section className="h-full w-full content-center grid grid-cols-2 gap-5 p-5 md:p-5  md:gap-2">
          {GALLERY_IMAGES?.map((image) => (
            <Image
              className="object-cover h-full w-full"
              key={image.alt}
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
            />
          ))}
        </section>
      </main>
      <footer className="text-white bg-black p-5 text-center md:px-32">
        Chandigarh, India | Phone: 9888804700 |
        surender.kumar@deeproots.in
      </footer>
    </>
  );
};

export default Footer;
