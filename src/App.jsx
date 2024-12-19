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
      <Route path="/" Component={Homepage}/>
      <Route path="/detail" Component={Detailhome}/>
      <Route path="/about" Component={Aboutpage}/>
      <Route path="/detailabout" Component={Detailvisimisi}/>
      <Route path="/partner" Component={Partnerpage}/>
      <Route path="/detailpartner" Component={Detailmitra}/>
      <Route path="/news" Component={Newspage}/>
      <Route path="/semuaberita" Component={Semuaberita}/>
      <Route path="/Detailberita" Component={DetailBerita}/>
      <Route path="/Detailberita2" Component={DetailBerita2}/>
      <Route path="/Detailberita3" Component={DetailBerita3}/>
      <Route path="/Detailberita4" Component={DetailBerita4}/>
      <Route path="/Detailberita5" Component={DetailBerita5}/>
      <Route path="/contak" Component={Contakpage}/>
      <Route path="/profile" Component={Profilepage}/>
      <Route path="/Register" Component={Registerpage}/>
      <Route path="/login" Component={Loginpage}/>
      <Route path="/ForgotPassword" Component={ForgetPass}/>
    </Routes>
  )
}

export default App
