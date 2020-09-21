const API_KEY ='05c0f6a04d026cf44b0b0994bf810b3f';
const requests={
    fecthTrending:`/trending/movie/week?api_key=${API_KEY}&language-US`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;