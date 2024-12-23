import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

function ProductsPage() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://proyecto-final-11.onrender.com/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error obteniendo los posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div>
      <ProductList products={posts} />
    </div>
  );
}

export default ProductsPage;