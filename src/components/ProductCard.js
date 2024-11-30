import React from "react";

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
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

