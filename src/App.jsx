import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BMICalculator from "./pages/BMICalculator";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/alert" element={<AlertPage />} /> */}

        <Route path="/" element={<h1>Ini adalah halaman home</h1>} />
        <Route path="/bmi" element={<BMICalculator />} />
      </Routes>
    </BrowserRouter>
  );
}
