import React from "react";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
//Création de AppRoutes
const App = () => {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
