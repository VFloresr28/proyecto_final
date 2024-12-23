import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://proyecto-final-11.onrender.com/api/posts/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <h2 className="text-center my-5">Producto no encontrado</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagen_url}
            alt={product.titulo}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.titulo}</h1>
          <p>{product.description}</p>
          <h3 className="text-success">${product.precio}</h3>
          <button className="btn btn-outline-primary">
              <i className="fa-regular fa-heart"></i> Agregar a favoritos
            </button>
            <button className="btn btn-primary">
              <i className="fa-solid fa-cart-plus"></i> Añadir al carrito
            </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;