import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container">
      <a className="navbar-brand" href="/">
          <img
            src="https://i.imgur.com/0X9FjWG.png"
            style={{ height: "70px", width: "70px" }} 
          />
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
              <i class="fa-solid fa-boxes-stacked"></i> Productos
              </Link>
            </li>
            
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
                      window.location.href = "/login";
                    }}
                  >
                    <i class="fa-solid fa-right-from-bracket"></i>Salir
                  </button>
                </li>
              </>
            ) : (
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