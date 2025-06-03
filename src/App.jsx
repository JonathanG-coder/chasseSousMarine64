import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
// import ThemeToggle from "./components/themeToggle/ThemeToggle";


function App() {
  

  return (
    <div className="App">
      
      
      {/* <ThemeToggle /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
