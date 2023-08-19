'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NAV_LINKS = [
  {
    title: 'HOME',
    route: '/',
  },
  {
    title: 'WORK',
    route: '/work',
  },
  {
    title: 'SERVICES',
    route: '/services',
  },
  {
    title: 'ABOUT',
    route: '/about',
  },
  {
    title: 'CONTACT',
    route: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathName = usePathname();
  return (
    <nav
      className={`z-50 fixed top-0 w-full transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={isScrolled ? '/blackLogo.png' : '/whiteLogo.png'} alt="deep_roots_logo" width={150} height={100} />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((navlink, index) => {
                return (
                  <li key={index}>
                    <Link
                      className={` py-[4px] mx-[12px]  ${
                        navlink.route === pathName && isScrolled === true
                          ? 'text-[black] font-[400] border-animation-black'
                          : isScrolled === true
                          ? 'text-[#999797] font-[400] border-animation-black'
                          : `border-animation-white`
                      }  `}
                      href={navlink.route}
                    >
                      {navlink.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md "
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'}   h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={`${isScrolled ? 'black' : 'white'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block transition-all duration-300' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[white] transition-all duration-300">
          {NAV_LINKS.map((navlink, index) => {
            return (
              <li className="text-center mb-2" onClick={toggleMenu} key={index}>
                <Link
                  className={`px-[10px] w-[150px] py-[4px] mx-[12px] font-[700]  rounded-md  text-center  mx-auto 
                 ${
                   navlink.route === pathName
                     ? 'text-[black] font-[400]'
                     : 'text-[#999797] font-[400]'
                 }`}
                  href={navlink.route}
                >
                  {navlink.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
