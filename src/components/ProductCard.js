import React from "react";
import { Link } from "react-router-dom"; // Usamos Link para navegación

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>{product.price}</strong>
          </p>
          {/* Botón que redirige al detalle del producto */}
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;