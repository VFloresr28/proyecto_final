import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products"; 

function ProductList() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Productos en venta</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

