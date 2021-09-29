import MainHeader from "../header/main-header"
import BottomNavbar from "../navbar/bottom-navbar"

const BasicLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-1 pb-[56px] bg-gray-100">
        { children }
      </main>
      <BottomNavbar />
    </div>
  )
}

export default BasicLayout
