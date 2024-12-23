import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://proyecto-final-11.onrender.com/api/posts");
        const allPosts = response.data;

        // Seleccionar 6 productos aleatorios
        const shuffledPosts = allPosts.sort(() => 0.5 - Math.random());
        const randomPosts = shuffledPosts.slice(0, 6);

        setPosts(randomPosts);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <ProductList products={posts} />
    </div>
  );
}

export default MainPage;