import { fetchScrollTextData, fetchHomeWorld, fetchSpecies, fetchResidents, fetchVehicleData } from './helpers.js';

export const fetchScrollText = async () => {
  let fetchedScrollTextData = [];
  let url = 'https://swapi.co/api/films/'
  const response = await fetch(url);
  const result = await response.json();
  fetchedScrollTextData.push(...result.results);
  const crawlData = await fetchScrollTextData(fetchedScrollTextData);
  return crawlData;
}

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

export const fetchPlanets = async () => {
  let fetchedPlanetData = [];
  let url = `https://swapi.co/api/planets/?page=1`
  const response = await fetch(url);
  const result = await response.json();
  fetchedPlanetData.push(...result.results);
  const planetsData = await fetchResidents(fetchedPlanetData);
  return planetsData;
}

export const fetchVehicles = async () => {
  let fetchedVehicleData = [];
  let url = `https://swapi.co/api/vehicles/?page=1`
  const response = await fetch(url);
  const result = await response.json();
  fetchedVehicleData.push(...result.results);
  const vehicleData = await fetchVehicleData(fetchedVehicleData);
  return vehicleData;
}