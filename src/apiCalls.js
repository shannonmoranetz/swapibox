// SCROLLTEXT

export const fetchScrollText = async () => {
  let fetchedScrollTextData = [];
  let url = 'https://swapi.co/api/films/'
  const response = await fetch(url);
  const result = await response.json();
  fetchedScrollTextData.push(...result.results);
  const crawlData = await fetchScrollTextData(fetchedScrollTextData);
  return crawlData;
}

const fetchScrollTextData = async (films) => {
  const unresolvedPromises = films.map(async film => {
  return ({ title: film.title, date: film.release_date, crawl: film.opening_crawl })
  })
  return Promise.all(unresolvedPromises);
}

// PEOPLE

export const fetchPeople = async () => {
  let fetchedPeopleData = [];
  let url = `https://swapi.co/api/people/?page=1`
  const response = await fetch(url);
  const result = await response.json();
  fetchedPeopleData.push(...result.results);
  const homeWorldData = await fetchHomeWorld(fetchedPeopleData);
  const completePeopleData = await fetchSpecies(homeWorldData);
  return completePeopleData;
}

const fetchHomeWorld = (fetchedPeople) => {
  const unresolvedPromises = fetchedPeople.map(async person => {
    const response = await fetch(person.homeworld);
    const result = await response.json();
    return ({ ...person, homeworld: result.name, population: result.population })
  })
  return Promise.all(unresolvedPromises);
}

const fetchSpecies = (fetchedPeople) => {
  const unresolvedPromises = fetchedPeople.map(async person => {
    if (person.species.length > 0) {
      const response = await fetch(person.species[0]);
      const result = await response.json();
      return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: result.name, language: result.language});
    } else {
      return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: 'Unknown', language: 'Unknown'});
    }
  })
return Promise.all(unresolvedPromises);
}

// PLANETS

export const fetchPlanets = async () => {
  let fetchedPlanetData = [];
  let url = `https://swapi.co/api/planets/?page=1`
  const response = await fetch(url);
  const result = await response.json();
  fetchedPlanetData.push(...result.results);
  const planetsData = await fetchResidents(fetchedPlanetData);
  return planetsData;
}

const fetchResidents = (planets) => {
  const unresolvedPromises = planets.map(async planet => {
    if (planet.residents.length > 0) {
      const addedResidents = await addResidents(planet.residents);
      return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: addedResidents})
      } else {
      return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: 'None.'})
      }
    })
  return Promise.all(unresolvedPromises)
}

const addResidents = (links) => {
  const unresolvedPromises = links.map(async link => {
    const response = await fetch(link);
    const result = await response.json();
    return result.name;
  })
  return Promise.all(unresolvedPromises)
}

// VEHICLES

export const fetchVehicles = async () => {
  let fetchedVehicleData = [];
  let url = `https://swapi.co/api/vehicles/?page=1`
  const response = await fetch(url);
  const result = await response.json();
  fetchedVehicleData.push(...result.results);
  const vehicleData = await fetchVehicleData(fetchedVehicleData);
  return vehicleData;
}

const fetchVehicleData = async (vehicles) => {
  const unresolvedPromises = vehicles.map(async vehicle => {
  return ({ name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers})
  })
  return Promise.all(unresolvedPromises);
}