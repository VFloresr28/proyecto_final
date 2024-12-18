import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import CreateUserPage from "./pages/CreateUserPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div id="root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={token ? <Navigate to="/profile" /> : <LoginPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          <Route 
            path="/profile" 
            element={token ? <ProfilePage /> : <Navigate to="/login" />} 
          />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

