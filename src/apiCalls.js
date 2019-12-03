export const getAllMoviesData = () => {
  return fetch('https://swapi.co/api/films')
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Error: ${response.status}, please check and try again.`
        );
      }
      return response.json();
    })
    .then(data => data.results)
    .then(allMovies => allMovies.sort((a, b) => a.episode_id - b.episode_id));
};
