import { FC } from 'react';

import MainHeader from '../header/main-header';
import BottomNavbar from '../navbar/bottom-navbar';

const BasicLayout: FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <MainHeader />
    <main className="flex-1 py-14 bg-gray-100">
      {children}
    </main>
    <BottomNavbar />
  </div>
);

export default BasicLayout;
