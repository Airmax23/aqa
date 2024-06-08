function fetchPlanetNameById(id) {
    return fetch(`https://swapi.dev/api/planets/${id}/`)
      .then(response => response.json())
      .then(data => data.name);
  }
  
  let planetPromises = [];
  for (let i = 1; i <= 10; i++) {
    planetPromises.push(fetchPlanetNameById(i));
  }
  
  Promise.all(planetPromises)
    .then(names => console.log(names))
    .catch(error => console.error("Error fetching planets:", error));

  fetch(`https://swapi.dev/api/people/14/`)
    .then(response => response.json())
    .then(data => {
    let starshipPromises = data.starships.map(starshipUrl => fetch(starshipUrl).then(resp => resp.json()));
    return Promise.all(starshipPromises);
  })
    .then(starships => console.log(starships.map(starship => starship.name)))
    .catch(error => console.error("Error fetching starships for Han Solo:", error));

    async function getHanSoloStarships() {
        try {
          const response = await fetch(`https://swapi.dev/api/people/14/`);
          const data = await response.json();
          const starships = await Promise.all(data.starships.map(async (starshipUrl) => {
            const starshipResponse = await fetch(starshipUrl);
            return starshipResponse.json();
          }));
          console.log(starships.map(starship => starship.name));
        } catch (error) {
          console.error("Error fetching starships for Han Solo:", error);
        }
      }
      
      getHanSoloStarships();

      async function getResidentsOfPlanetsInMovie(movieId) {
        try {
          const movieResponse = await fetch(`https://swapi.dev/api/films/${movieId}/`);
          const movieData = await movieResponse.json();
          const planetDataPromises = movieData.planets.map(async (planetUrl) => {
            const planetResponse = await fetch(planetUrl);
            const planetData = await planetResponse.json();
            const residentsPromises = planetData.residents.map(async (residentUrl) => {
              const residentResponse = await fetch(residentUrl);
              const residentData = await residentResponse.json();
              return residentData.name;
            });
            const residents = await Promise.all(residentsPromises);
            return {
              planetName: planetData.name,
              residents: residents
            };
          });
          return Promise.all(planetDataPromises);
        } catch (error) {
          console.error("Error fetching residents of planets in movie:", error);
        }
      }
      
      getResidentsOfPlanetsInMovie(3).then(data => console.log(data));