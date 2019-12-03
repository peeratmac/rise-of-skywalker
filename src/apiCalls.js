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

export const getIndividualHomeworld = characters => {
  const homeworldData = characters.map(individual => {
    return fetch(individual.homeworld)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Error: ${response.status}, please check and try again.`
          );
        }
        return response.json();
      })
      .then(data => {
        return {
          ...individual,
          homeworld: data.name,
          population: data.population
        };
      });
  });
  return Promise.all(homeworldData);
};

export const getIndividualSpecies = characters => {
  const speciesData = characters.map(individual => {
    return fetch(individual.species)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Error: ${response.status}, please check and try again.`
          );
        }
        return response.json();
      })
      .then(data => {
        return {
          ...individual,
          species: data.name
        };
      });
  });
  return Promise.all(speciesData);
};

export const getIndividualFilms = characters => {
  const allFilms = characters.map(individual => {
    const filmTitles = individual.films.map(film => {
      return fetch(film)
        .then(response => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status}, please check and try again.`
            );
          }
          return response.json();
        })
        .then(data => data.title);
    });
    return Promise.all(filmTitles).then(data => {
      return {
        ...individual,
        films: data
      };
    });
  });
  return Promise.all(allFilms);
};
