import { FC } from 'react';

import MainHeader from '../header/main-header';

const WithoutBottomNavbarLayout: FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <MainHeader />
    <main className="flex-1 pt-14 bg-gray-100">
      {children}
    </main>
  </div>
);

export default WithoutBottomNavbarLayout;
