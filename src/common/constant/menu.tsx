import {
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon,
  BiEnvelope as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
} from 'react-icons/bi';
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'Project',
    href: '/project',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },
  {
    title: 'Career',
    href: '/career',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Career',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/ColtenLeeElite',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/colten-lee-1ab1722a3',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/ColtenLee',
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Twitter',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/ColtenLee',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
  },
  {
    title: 'Threads',
    href: 'https://www.threads.net/@ColtenLee',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Threads',
  },
];
