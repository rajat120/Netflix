const API_KEY = "dbe8d2465156523c3a478e1ced145808";

const requests ={
 fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
 fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
 };

 export default requests;