import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [newPost, setNewPost] = useState({ titulo: "", descripcion: "", precio: "", imagen_url: "" });
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const token = localStorage.getItem("token");

  console.log("Token enviado:", token); 

  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const userId = decodedToken ? decodedToken.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in token");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error obteniendo los datos del usuario", error);
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        {
          ...newPost,
          userid: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Post creado exitosamente:", response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error creando la publicación:", error);
    }
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center">Bienvenido, {user.nombre}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Información del Usuario</h5>
              <p className="card-text">Correo: {user.email}</p>
              <p className="card-text">Teléfono: {user.celular}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-4" onClick={() => setIsCreatingPost(true)}>
        Crear nueva publicación
      </button>

      {isCreatingPost && (
        <div className="mt-4">
          <h3>Crear Publicación</h3>
          <form onSubmit={handleCreatePost}>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                name="titulo"
                value={newPost.titulo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripción</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={newPost.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                id="precio"
                name="precio"
                value={newPost.precio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imagen_url" className="form-label">Imagen URL</label>
              <input
                type="text"
                className="form-control"
                id="imagen_url"
                name="imagen_url"
                value={newPost.imagen_url}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">Crear publicación</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
