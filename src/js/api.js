import { generateURL } from "./utils";
import {renderMovies, renderError} from './templates';

export const getMovies = (path, selector, text) => {
    fetch(generateURL(path))
      .then(res => res.json())
      .then(data => {
        console.log('results', data.results);
  
        const root = document.querySelector(selector);
  
        if(data.status_message && data.status_code) {
          root.innerHTML = renderError({ status_code: data.status_code, status_message: data.status_message });
        } else {
          root.innerHTML += renderMovies(data.results, text);
        }
      });
  }