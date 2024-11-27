import React from "react";
import "./css/main.css";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Detailhome from "./pages/Detailhome";
import Aboutpage from "./pages/Aboutpage";
import Detailvisimisi from "./pages/Detailvisimisi";
import Partnerpage from "./pages/Partnerpage";
import Detailmitra from "./pages/Detailmitra";
import Newspage from "./pages/Newspage";
import Contakpage from "./pages/Contakpage";
import Profilepage from "./pages/Profilepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage"
import ForgetPass from "./pages/Forgotpasswordpage"
import DetailBerita from "./pages/Detailberita";
import DetailBerita2 from "./pages/Detailberita2";
import DetailBerita3 from "./pages/Detailberita3";
import DetailBerita4 from "./pages/Detailberita4";
import DetailBerita5 from "./pages/Detailberita5";
import Semuaberita from "./pages/Semuaberita";


function App() {
  return (
    <Routes>
      <Route path="/Energiku" Component={Homepage}/>
      <Route path="/Energiku/detail" Component={Detailhome}/>
      <Route path="/Energiku/about" Component={Aboutpage}/>
      <Route path="/Energiku/detailabout" Component={Detailvisimisi}/>
      <Route path="/Energiku/partner" Component={Partnerpage}/>
      <Route path="/Energiku/detailpartner" Component={Detailmitra}/>
      <Route path="/Energiku/news" Component={Newspage}/>
      <Route path="/Energiku/allnews" Component={Semuaberita}/>
      <Route path="/Energiku/detailnews" Component={DetailBerita}/>
      <Route path="/Energiku/detailnews2" Component={DetailBerita2}/>
      <Route path="/Energiku/detailnews3" Component={DetailBerita3}/>
      <Route path="/Energiku/detailnews4" Component={DetailBerita4}/>
      <Route path="/Energiku/detailnews5" Component={DetailBerita5}/>
      <Route path="/Energiku/contak" Component={Contakpage}/>
      <Route path="/Energiku/profile" Component={Profilepage}/>
      <Route path="/Energiku/Register" Component={Registerpage}/>
      <Route path="/Energiku/login" Component={Loginpage}/>
      <Route path="/Energiku/ForgotPassword" Component={ForgetPass}/>
    </Routes>
  )
}

export default App
