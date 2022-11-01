import {generateImgTag} from "./utils";

export const renderError = ({ status_code, status_message }) => (`
  <div class="container">
    <div class="error">
      <h2>Status code: ${status_code}</h2>
      <p>Status message: ${status_message}</p>
    </div>
  </div>
`);


export const renderMovies = (movies, text) => (`
    <section>
      <h2 class="section-title">${text}</h2>
      <div class="popular d-flex">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);

export const renderMovie = movie => (`
    <div class='card'>
      ${generateImgTag(movie.poster_path, movie.original_title)}
      <div class="movie_title">${movie.original_title}</div>
      <div class="bage">${movie.vote_average * 10}</div>
    </div>
`);

