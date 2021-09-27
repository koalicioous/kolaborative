import MainHeader from "../header/main-header"
import BottomNavbar from "../navbar/bottom-navbar"

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className="pb-16 bg-gray-100">
        { children }
      </main>
      <BottomNavbar />
    </>
  )
}

export default BasicLayout
