import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {

    if (!token) {
      window.location.href = "/login";
    }


    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        setError("Error al obtener los datos del usuario");
      }
    };

    fetchUserData();
  }, [token]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Perfil del Usuario</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5>Nombre: {userData.nombre}</h5>
          <p>Email: {userData.email}</p>
          <p>Teléfono: {userData.celular}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
