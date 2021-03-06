import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import clsx from 'clsx';
import { menus } from '../../../lib/layout/navbar';

const BottomNavbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-10 bg-white w-full shadow-xl border-t">
      <ul className="max-w-lg m-auto flex">
        {menus.map((menu) => {
          const isActive = Array.isArray(menu.href)
            ? menu.href.includes(router.asPath)
            : menu.href === router.asPath;

          return (
            <li key={menu.name} className="flex-1">
              <Link href={Array.isArray(menu.href) ? menu.href[0] : menu.href}>
                <a
                  className={clsx(
                    'p-2 text-xs text-center flex flex-col justify-center items-center',
                    isActive ? 'text-blue-700' : 'text-gray-600',
                  )}
                >
                  {menu.icon}
                  <p className="mt-1">
                    {menu.name}
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavbar;
