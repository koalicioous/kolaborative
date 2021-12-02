import { ReactElement } from 'react';
import Head from 'next/head';
import BasicLayout from '../../components/layout/base/basic-layout';
import ProfileHeader from '../../components/profile/profile-header';
import { useAuth } from '../../context/auth';
import Authentication from '../../components/auth';

export default function MyProfile() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>
          My Profile - Kolaborative
        </title>
      </Head>
      {
        user
          ? <ProfileHeader />
          : <Authentication />
      }
    </>
  );
}

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};
