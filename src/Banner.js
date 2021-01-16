import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  function truncate(str, n) {
    /*console.log(str?.length <= num ? str : str.slice(0, num) + "...");*/
    /* return str?.length > n ? str.slice(0, n) + "..." : str;*/
    return str?.length <= n ? str : str?.slice(0, n) + "...";
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "centre centre",
      }}
    >
      <div className="banner_container">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <button className="banner_button"> Play </button>
        <button className="banner_button"> My List</button>
      </div>
      <h1 className="Banner__description">
        {movie?.overview}
        {truncate(movie?.overview, 200)}
      </h1>
    </header>
  );
}

export default Banner;
