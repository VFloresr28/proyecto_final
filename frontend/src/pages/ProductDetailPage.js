import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

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
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Agregar a favoritos</button>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;