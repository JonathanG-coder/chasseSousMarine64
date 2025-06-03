import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Spot from  "./pages/spot/Spot"
// import Footer from "./components/footer/Footer";


function App() {
  

  return (
    <div className="App">
      
      
      {/* <ThemeToggle /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
