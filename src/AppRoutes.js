import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import FicheL from "./pages/FicheL";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/FicheL/:id" element={<FicheL />} />
    </Routes>
  );
};

export default AppRoutes;
