import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {}, []);

  function searchMoviesByName() {
    console.log("Procurar filme.");
  }

  return (
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  );
}
