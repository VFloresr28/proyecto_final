import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
