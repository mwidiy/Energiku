import React from "react";
import "./css/main.css";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Partnerpage from "./pages/Partnerpage";
import Newspage from "./pages/Newspage";
import Contakpage from "./pages/Contakpage";
import Profilepage from "./pages/Profilepage";

function App() {
  return (
    <Routes>
      <Route path="/Energiku" Component={Homepage}/>
      <Route path="/Energiku/about" Component={Aboutpage}/>
      <Route path="/Energiku/partner" Component={Partnerpage}/>
      <Route path="/Energiku/news" Component={Newspage}/>
      <Route path="/Energiku/contak" Component={Contakpage}/>
      <Route path="/Energiku/profile" Component={Profilepage}/>
    </Routes>
  )
}

export default App
