import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={product.imagen_url}
          alt={product.titulo}
          className="card-img-top img-fluid"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.titulo}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>${product.precio}</strong>
          </p>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;