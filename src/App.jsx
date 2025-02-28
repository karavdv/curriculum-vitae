/**
 * App.jsx
 * Dit component regelt de routing en navigatie.
 */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Opleiding } from './components/Opleiding'
import { Carriere } from './components/Carriere';
import { Vaardigheden } from './components/Vaardigheden';
import { AlgemeneGegevens } from './components/AlgemeneGegevens';
import { Navbar } from './components/Navbar'
import { ThemeToggle } from "./components/ThemeToggle";
import { Social } from "./components/Social";

export function App() {

  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <div className="buttons">
          <ThemeToggle />
          <Social />
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

