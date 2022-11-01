import {generateImgTag} from "./utils";

export const renderError = ({ status_code, status_message }, text) => (`
    <section>
    <h2 class="section-title">${text}</h2>
    <div class="error">
      <h2>Something went wrong...can't render section!</h2>
      <p>Status code: ${status_code}</p>
      <p>Status message: ${status_message}</p>
    </div>
    </section>
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

