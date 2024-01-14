import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BMICalculator from "./pages/BMICalculator";
import CicilanBank from "./pages/CicilanBank";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/alert" element={<AlertPage />} /> */}

        <Route path="/" element={<h1>Twiska kalkulator react</h1>} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/cicilan" element={<CicilanBank />} />
      </Routes>
    </BrowserRouter>
  );
}
