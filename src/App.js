import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./Components/Movies";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

// ///////////////////
const URL = "https://api.themoviedb.org/3";
const API_KEY = "530bea0db280cfab0c87d9b46efe504f";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
};
// /////////////////////
function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    // Load Trending
    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));
  }, []);

  return (
    <>
      <Header />
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      <Movies title="Original Movies" movies={originals} />
      <Movies title="Trending Movies" movies={trending} />
    </>
  );
}

export default App;
