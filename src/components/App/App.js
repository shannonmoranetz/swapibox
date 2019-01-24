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
      people: [],
      planets: [],
      vehicles: []
    }
  }

  componentDidMount = () => {
    this.retrieveData();
  }
  
  retrieveData = () => {
    this.fetchPeople();
    this.fetchPlanets();
    this.fetchVehicles();
  }

  // PEOPLE

  fetchPeople = async () => {
    let fetchedPeopleData = [];
    for (let i = 1; i < 10; i++) {
      let url = `https://swapi.co/api/people/?page=${i}`
      const response = await fetch(url);
      const result = await response.json();
      fetchedPeopleData.push(...result.results);
    }
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
        const response = await fetch(person.species[0])
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
    for (let i = 1; i < 8; i++) {
      let url = `https://swapi.co/api/planets/?page=${i}`
      const response = await fetch(url);
      const result = await response.json();
      fetchedPlanetData.push(...result.results);
    }
    const planetsData = await this.fetchResidents(fetchedPlanetData);
    this.setState({ planets: planetsData });
  }

  fetchResidents = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      if (planet.residents.length > 0) {
        let fetchedNameData = [];
        for (let i = 0; i < planet.residents.length; i++) {
          const response = await fetch(planet.residents[i])
          const result = await response.json()
          fetchedNameData.push(result.name);
        }
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: fetchedNameData})
        } else {
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: 'None.'})
        }
      })
    return Promise.all(unresolvedPromises)
  }

  // VEHICLES

  fetchVehicles = async () => {
    let fetchedVehicleData = [];
    for (let i = 1; i < 5; i++) {
      let url = `https://swapi.co/api/vehicles/?page=${i}`
      const response = await fetch(url);
      const result = await response.json();
      fetchedVehicleData.push(...result.results);
    }
    const checkedVehicles = await this.fetchVehicleData(fetchedVehicleData);
    this.setState({ vehicles: checkedVehicles })
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
