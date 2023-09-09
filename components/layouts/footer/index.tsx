import Image from 'next/image';

const Footer = () => {
  const SOCIAL_LOGO = [
    {
      name: 'Facebook',
      src: '/assets/fb.png',
    },
    {
      name: 'LinkedIn',
      src: '/assets/linkedin.png',
    },
    {
      name: 'Instagram',
      src: '/assets/insta.png',
    },
    {
      name: 'Twitter',
      src: '/assets/twitter.png',
    },
  ];
  return (
    <main className="bg-black text-white grid grid-rows-3 content-center gap-4 p-5">
      <section className="flex flex-col justify-center">
        <Image
          src="/whiteLogo.png"
          alt="deep_roots_logo"
          width={300}
          height={200}
          className="w-full h-full"
        />
        <p className="text-center text-xl leading-loose">
          The Event Company is the premier event design + production company that specializes in
          corporate, nonprofit + social events. #WeBuildDreams
        </p>
      </section>
      <section className="flex flex-col justify-center items-center m-10">
        <p className="text-3xl text-orange-300 m-10">Follow Us</p>
        <div className='flex justify-around'>
          {SOCIAL_LOGO?.map((image) => (
            <Image className='mx-2' key={image.name} src={image.src} alt={image.name} width={30} height={30} />
          ))}
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Footer;
