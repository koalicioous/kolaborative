import { ReactElement } from "react"
import BasicLayout from "../../components/layout/base/basic-layout"
import Head from "next/head"
import ProfileHeader from "../../components/profile/profile-header"

export default function MyProfile() {
  return (
    <>
      <Head>
        <title>
          My Profile - Kolaborative
        </title>
      </Head>

      <ProfileHeader />
    </>
  )
}

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  )
}