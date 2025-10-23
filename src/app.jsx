import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home.jsx";
import ProjectDetails from "./Screens/proyectdetail/ProjectDetail.jsx"; // ajusta según tu ruta real

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<ProjectDetails />} />
      </Routes>
    </HashRouter>
  );
}

