export const fetchScrollTextData = async (films) => {
  const unresolvedPromises = films.map(async film => {
  return ({ title: film.title, date: film.release_date, crawl: film.opening_crawl })
  })
  return Promise.all(unresolvedPromises);
}

export const fetchHomeWorld = (fetchedPeople) => {
  const unresolvedPromises = fetchedPeople.map(async person => {
    const response = await fetch(person.homeworld);
    const result = await response.json();
    return ({ ...person, homeworld: result.name, population: result.population })
  })
  return Promise.all(unresolvedPromises);
}

export const fetchSpecies = (fetchedPeople) => {
  const unresolvedPromises = fetchedPeople.map(async person => {
    if (person.species.length > 0) {
      const response = await fetch(person.species[0]);
      const result = await response.json();
      return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: result.name, language: result.language, category: 'people'});
    } else {
      return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: 'Unknown', language: 'Unknown', category: 'people'});
    }
  })
return Promise.all(unresolvedPromises);
}

export const fetchResidents = (planets) => {
  const unresolvedPromises = planets.map(async planet => {
    if (planet.residents.length > 0) {
      const addedResidents = await addResidents(planet.residents);
      return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: addedResidents})
      } else {
      return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: 'None.', category: 'planets'})
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

export const fetchVehicleData = async (vehicles) => {
  const unresolvedPromises = vehicles.map(async vehicle => {
  return ({ name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers, category: 'vehicles'})
  })
  return Promise.all(unresolvedPromises);
}