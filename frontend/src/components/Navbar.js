import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            
            {/* Si hay token, mostrar opción de Perfil */}
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <i className="fa-solid fa-user"></i> Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.href = "/login"; // Redirige al login
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Si no hay token, mostrar opciones de Login y Crear cuenta
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <i className="fa-solid fa-user"></i> Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-user">
                    <i className="fa-solid fa-user-plus"></i> Crear cuenta
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;