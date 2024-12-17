import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, ingrese el correo electrónico y la contraseña.");
      return;
    }

    const userCredentials = {
      email,
      contrasena: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/login", userCredentials);

      const { token } = response.data;

      localStorage.setItem("token", token);

      alert("Login exitoso");

    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data?.error || error.message);
      alert("Error al iniciar sesión: " + (error.response?.data?.error || error.message));
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