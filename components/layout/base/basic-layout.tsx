import MainHeader from "../header/main-header"

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>
        { children }
      </main>
    </>
  )
}

export default BasicLayout
