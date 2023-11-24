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
