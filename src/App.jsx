import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Opleiding } from './components/Opleiding'
import { Carriere } from './components/Carriere';
import { Vaardigheden } from './components/Vaardigheden';
import { AlgemeneGegevens } from './components/AlgemeneGegevens';
import { Navbar } from './components/Navbar'
import { ThemeToggle } from "./components/ThemeToggle";
import './css/social.css'

export function App() {

  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <div className="buttons">
          <ThemeToggle />
          <a href="https://www.linkedin.com/in/karavandevelde"
            target="_blank"
            className='social'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <Routes>
          <Route path="/opleiding" element={<Opleiding />} />
          <Route path="/carriere" element={<Carriere />} />
          <Route path="/vaardigheden" element={<Vaardigheden />} />
          <Route path="/" element={<AlgemeneGegevens />} />
        </Routes>
      </div>
    </Router>
  );
}

