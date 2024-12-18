import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
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
