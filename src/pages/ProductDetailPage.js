import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; 

function ProductDetailPage() {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <h2 className="text-center my-5">Producto no encontrado</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3 className="text-success">{product.price}</h3>
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
