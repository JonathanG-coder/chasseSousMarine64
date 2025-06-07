import React from "react";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Spot from  "./pages/spot/Spot"
import Especes from "./pages/especes/Especes";
// import Footer from "./components/footer/Footer";


function App() {
  

  return (
    <div className="App">
      
      
      {/* <ThemeToggle /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/spot" element={<Spot />}/>
        <Route path="/especes" element={<Especes />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
