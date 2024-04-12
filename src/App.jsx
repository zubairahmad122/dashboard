import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LeftSideBar from "./components/LeftSideBar";
import TopNav from "./components/TopNav";
import { useState } from "react";
import Guest from "./pages/Guest";
import Room from "./pages/Room";
import Deal from "./pages/Deal";
import Rate from "./pages/Rate";
import Frontdesk from "./pages/Front-desk";
import FrontDesk1 from "./pages/Front-dest1";


function App() {

  const [navOpen,setNavOpen] = useState(false)

  return (
    <main className='flex max-w-screen-2xl mx-auto'>


      <BrowserRouter>
      <LeftSideBar navOpen={navOpen} />
      <div className="flex-1">
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/front-desk" element={<Frontdesk />} />
          <Route path="/front-desk1" element={<FrontDesk1 />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/room" element={<Room />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/rate" element={<Rate />} />
      </Routes>
      </div>
    </BrowserRouter>
    </main >
  )
}

export default App
