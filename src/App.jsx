import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
