import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "./assets/css/custom.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Layout />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
