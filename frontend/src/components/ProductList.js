import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Productos</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;