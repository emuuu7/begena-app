import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Modes from "./pages/Modes";
import Play from "./pages/Play";
import './App.css';
export default function App() {
  return (
    <div className= "app-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modes" element={<Modes />} />
      <Route path="/play/:modeId" element={<Play />} />
    </Routes>
 </div> );
}
