import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Login from "./components/Login";
import SIgnup from "./components/Signup";

function App() {
  return (
    <>
    <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SIgnup/>}/>
      <Route path='/login' element={<Login/>}/>

      </Routes>

    </>
  );
}

export default App;
