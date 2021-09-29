import { ReactElement } from "react"
import BasicLayout from "../../components/layout/base/basic-layout"
import Head from "next/head"

export default function MyProfile() {
  return (
    <>
      <Head>
        <title>
          My Profile - Kolaborative
        </title>  
      </Head> 
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