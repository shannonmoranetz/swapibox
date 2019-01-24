import React, { Component } from 'react';
import '../../main.scss';
import { CardContainer } from '../CardContainer/CardContainer';
import { Controls } from '../Controls/Controls';
import { Header } from '../Header/Header';
import { ScrollText } from '../ScrollText/ScrollText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      crawls: [],
      people: [],
      planets: [],
      vehicles: []
    }
  }

  componentDidMount = () => {
    this.retrieveData();
  }
  
  retrieveData = () => {
    this.fetchScrollText();
    this.fetchPeople();
    this.fetchPlanets();
    this.fetchVehicles();
  }

  // SCROLLTEXT

  fetchScrollText = async () => {
    let fetchedScrollTextData = [];
    let url = 'https://swapi.co/api/films/'
    const response = await fetch(url);
    const result = await response.json();
    fetchedScrollTextData.push(...result.results);
    const crawlData = await this.fetchScrollTextData(fetchedScrollTextData);
    this.setState({ crawls: crawlData })
  }

  fetchScrollTextData = async (films) => {
    const unresolvedPromises = films.map(async film => {
    return ({ title: film.title, date: film.release_date, crawl: film.opening_crawl })
    })
    return Promise.all(unresolvedPromises);
  }

  // PEOPLE

  fetchPeople = async () => {
    let fetchedPeopleData = [];
    let url = `https://swapi.co/api/people/?page=1`
    const response = await fetch(url);
    const result = await response.json();
    fetchedPeopleData.push(...result.results);
    const homeWorldData = await this.fetchHomeWorld(fetchedPeopleData);
    const completePeopleData = await this.fetchSpecies(homeWorldData);
    this.setState({ people: completePeopleData })
  }

  fetchHomeWorld = (fetchedPeople) => {
    const unresolvedPromises = fetchedPeople.map(async person => {
      const response = await fetch(person.homeworld);
      const result = await response.json();
      return ({ ...person, homeworld: result.name, population: result.population })
    })
    return Promise.all(unresolvedPromises);
}

  fetchSpecies = (fetchedPeople) => {
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
  
  fetchPlanets = async () => {
    let fetchedPlanetData = [];
    let url = `https://swapi.co/api/planets/?page=1`
    const response = await fetch(url);
    const result = await response.json();
    fetchedPlanetData.push(...result.results);
    const planetsData = await this.fetchResidents(fetchedPlanetData);
    this.setState({ planets: planetsData });
  }

  fetchResidents = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      if (planet.residents.length > 0) {
        const addedResidents = await this.addResidents(planet.residents);
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: addedResidents})
        } else {
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: 'None.'})
        }
      })
    return Promise.all(unresolvedPromises)
  }

  addResidents = (links) => {
    const unresolvedPromises = links.map(async link => {
      const response = await fetch(link);
      const result = await response.json();
      console.log(result.name)
      return result.name;
    })
    return Promise.all(unresolvedPromises)
  }

  // VEHICLES

  fetchVehicles = async () => {
    let fetchedVehicleData = [];
    let url = `https://swapi.co/api/vehicles/?page=1`
    const response = await fetch(url);
    const result = await response.json();
    fetchedVehicleData.push(...result.results);
    const VehicleData = await this.fetchVehicleData(fetchedVehicleData);
    this.setState({ vehicles: VehicleData })
  }

  fetchVehicleData = async (vehicles) => {
    const unresolvedPromises = vehicles.map(async vehicle => {
    return ({ name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers})
    })
    return Promise.all(unresolvedPromises);
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Header />
        <ScrollText />
        <Controls />
        <CardContainer />
      </div>
    )
  }
}
