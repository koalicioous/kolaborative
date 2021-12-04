import BookmarkIconOutline from '../../components/ui/icons/outline/bookmark-icon';
import HomeIconOutline from '../../components/ui/icons/outline/home-icon';
import SparklesIconOutline from '../../components/ui/icons/outline/sparkles-icon';
import UserIconOutline from '../../components/ui/icons/outline/user-icon';
import { MODE_OWNER, MODE_TALENT } from '../../constants/global';

export interface Menu {
  name: string,
  icon: JSX.Element,
  href: string | string[],
  exact?: boolean
}

export const menus: Menu[] = [
  {
    name: 'Home',
    icon: <HomeIconOutline className="h-5 w-5" />,
    href: ['/', `/?mode=${MODE_TALENT}`, `/?mode=${MODE_OWNER}`, '/#'],
  },
  {
    name: 'Saved',
    icon: <BookmarkIconOutline className="h-5 w-5" />,
    href: '/saved',
  },
  {
    name: 'My Projects',
    icon: <SparklesIconOutline className="h-5 w-5" />,
    href: '/myprojects',
  },
  {
    name: 'Profile',
    icon: <UserIconOutline className="h-5 w-5" />,
    href: ['/myprofile', '/login', '/register'],
  },
];
