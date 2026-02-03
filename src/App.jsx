import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Begena from "./components/Begena.jsx";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Begena App</h1>
      <Begena />
    </div>
  );
}

export default App;
