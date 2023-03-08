import React from "react";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

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
