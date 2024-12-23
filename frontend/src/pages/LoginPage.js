import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://proyecto-final-11.onrender.com/api/login", {
        email,
        contrasena: password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Iniciar sesión</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;