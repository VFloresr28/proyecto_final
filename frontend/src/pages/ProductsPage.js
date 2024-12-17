import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

function ProductsPage() {
    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default ProductsPage;