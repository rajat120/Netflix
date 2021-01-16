import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies}></Row>
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies}></Row>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}></Row>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}></Row>
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies}></Row>
      <Row title="Top Trending" fetchurl={requests.fetchTrending}></Row>
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies}></Row>
    </div>
  );
}

export default App;
