// Import necessary icons and ReactNode type
import React, { ReactNode } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TfiRulerPencil } from 'react-icons/tfi';
import { VscFileSubmodule } from 'react-icons/vsc';
import { BiUser } from 'react-icons/bi';

// Define the HomeItem interface
interface HomeItem {
  icon: ReactNode;
  title: string;
}

export const HOME: HomeItem[] = [
  {
    icon: React.createElement(AiOutlineCalendar, { size: 35 }),
    title: '10+ years of market experience',
  },
  {
    icon: React.createElement(TfiRulerPencil, { size: 35 }),
    title: 'Unique technologies & modern approach',
  },
  {
    icon: React.createElement(VscFileSubmodule, { size: 35 }),
    title: '350+ successful events',
  },
  {
    icon: React.createElement(BiUser, { size: 35 }),
    title: 'Customer satisfaction is our top priority',
  },
];

export const NAV_LINKS = [
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

export const SOCIAL_LOGO = [
  {
    name: 'Facebook',
    src: '/assets/fb.png',
    link: 'https://www.facebook.com/deeprootsevents/',
  },
  {
    name: 'LinkedIn',
    src: '/assets/linkedin.png',
    link: 'https://www.linkedin.com/in/surender-kumar-50b774a9/',
  },
  {
    name: 'Instagram',
    src: '/assets/insta.png',
    link: 'https://www.instagram.com/deeproots_events/',
  },
  {
    name: 'Twitter',
    src: '/assets/twitter.png',
  },
  {
    name: 'Whatsapp',
    src: '/assets/whatsapp.png',
    link: 'whatsapp://send?phone=9915264107',
  },
];

export const COMPANY_LOGOS = [
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
  {
    id: 5,
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Vivo_Logo.svg',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: '/assets/farmtrac.svg',
    alt: 'Image 6',
  },
];

export const GALLERY = [
  {
    id: 1,
    src: '/assets/bg1.png',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '/assets/bg2.png',
    alt: 'Image 2 ',
  },

  {
    id: 3,
    src: '/assets/bg3.png',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: '/assets/bg4.png',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: '/assets/bg1.png',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: '/assets/bg2.png',
    alt: 'Image 6',
  },
];
