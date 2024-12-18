import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Products from "./assets/components/Products";
import Contact from "./assets/components/Contact";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
