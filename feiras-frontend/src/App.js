import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MapaFeiras from "./pages/MapaFeiras";
import SobrePage from "./pages/SobrePage";



function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/maps" element={<MapaFeiras />} />
            <Route path="/sobre" element={<SobrePage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider> 
  );
}

export default App;
