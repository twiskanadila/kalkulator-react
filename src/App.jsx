import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BMICalculator from "./pages/BMICalculator";
import CicilanBank from "./pages/CicilanBank";
import HargaAkhirCalculator from "./pages/HargaAkhir";
import KonversiBilanganBiner from "./pages/KonversiBilanganBiner"; 
import KonversiBilanganOktal from "./pages/KonversiBilanganOktal";
import KonversiBilanganDesimal from "./pages/KonversiBilanganDesimal"; 
import KonversiBilanganHeksadesimal from "./pages/KonversiBilanganHeksadesimal"; 



import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/alert" element={<AlertPage />} /> */}
        <Route path="/" element={<h1>Twiska kalkulator react</h1>} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/cicilan" element={<CicilanBank />} />
        <Route path="/harga-akhir" element={<HargaAkhirCalculator />} />
        <Route path="/konversi-biner" element={<KonversiBilanganBiner />} />
        <Route path="/konversi-Oktal" element={<KonversiBilanganOktal />} />
        <Route path="/konversi-Desimal" element={<KonversiBilanganDesimal />} />
        <Route path="/konversi-Heksadesimal" element={<KonversiBilanganHeksadesimal />} />
      </Routes>
    </BrowserRouter>
  );
}
