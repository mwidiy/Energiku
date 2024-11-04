import React from "react";
import "./css/main.css";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Homepage}/>
    </Routes>
  )
}

export default App
