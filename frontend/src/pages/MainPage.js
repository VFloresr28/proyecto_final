import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

function MainPage() {
  const getRandomProducts = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products, 6);

  return (
    <div>
      <ProductList products={randomProducts} />
    </div>
  );
}

export default MainPage;


