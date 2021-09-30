import BookmarkIcon from '../../components/ui/icons/bookmark-icon';
import HomeIcon from '../../components/ui/icons/home-icon';
import SparklesIcon from '../../components/ui/icons/sparkles-icon';
import UserIcon from '../../components/ui/icons/user-icon';
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
    icon: <HomeIcon className="h-5 w-5" />,
    href: ['/', `/?mode=${MODE_TALENT}`, `/?mode=${MODE_OWNER}`],
  },
  {
    name: 'Saved',
    icon: <BookmarkIcon className="h-5 w-5" />,
    href: '/saved',
  },
  {
    name: 'My Projects',
    icon: <SparklesIcon className="h-5 w-5" />,
    href: '/myprojects',
  },
  {
    name: 'Profile',
    icon: <UserIcon className="h-5 w-5" />,
    href: '/myprofile',
  },
];
