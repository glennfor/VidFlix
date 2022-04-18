const API_KEY = "25f7ffcf9a69544373daca96b9e4995b";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";


const CATEGORIES = {
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    Action : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentary:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default CATEGORIES;