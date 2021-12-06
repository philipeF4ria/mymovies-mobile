export function selectMovies(size, movies) {
  let selectedMoviesList = [];

  for(let i = 0; i < size; i++) {
    selectedMoviesList.push(movies[i]);
  }

  return selectedMoviesList;
}
