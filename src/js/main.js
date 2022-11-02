import {getMovies, getMovieDetails, searchMovies} from "./api";
import { generateHash } from "./utils";

const root = document.querySelector(".container-main");
const input = document.querySelector('input');

checkUrl();

input.addEventListener('change', (e) => {
    root.innerHTML = '';
    location.hash = input.value;
})

window.addEventListener('hashchange', (e) => {
    checkUrl();
})


function checkUrl () {
    const hash = location.hash;
    const [hashName] = hash.split('=');

    if (hashName === '#movieId') {
        getMovieDetails(`movie/${generateHash(hash)}`, ".container-main");  
    } else if (hashName != '') {
        searchMovies(`search/movie`, ".container-main", "Found matches...", hashName.slice(1))
    } else {
        root.innerHTML = '';
        getMovies('movie/popular', ".container-main", "Today is popular...");
        getMovies('movie/top_rated', ".container-main", "Top-rated movies..."); 
        getMovies('movie/upcoming', ".container-main", "Upcoming...")  ;
    }
  }





