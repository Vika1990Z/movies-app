import { generateURL } from "./utils";
import {renderMovies, renderError, renderMovieDetails} from './templates';

export const getMovies = (path, selector, text) => {
    fetch(generateURL(path))
      .then(res => res.json())
      .then(data => {
        const root = document.querySelector(selector);
        if(data.success === false) {
          root.innerHTML += renderError({ status_code: data.status_code, status_message: data.status_message }, text);
        } else {
          root.innerHTML += renderMovies(data.results, text);
        }
      });
}


export const getMovieDetails = (path, selector) => {
  fetch(generateURL(path))
    .then(res => res.json())
    .then(data => {

      console.log(data);
      const root = document.querySelector(selector);

      if(data.success === false) {
        root.innerHTML = renderError({ status_code: data.status_code, status_message: data.status_message }, "Can't render movie detailes");
      } else {
        root.innerHTML = renderMovieDetails(data);
      }
    });
}


export const searchMovies = (path, selector, text, matches) => {
  fetch(`${generateURL(path)}&query=${matches}`)
    .then(res => res.json())
    .then(data => {
      const root = document.querySelector(selector);
      if(data.success === false) {
        root.innerHTML += renderError({ status_code: data.status_code, status_message: data.status_message }, text);
      } else {
        root.innerHTML += renderMovies(data.results, text);
      }
    });
}