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
      planets: []
    }
  }

  componentDidMount = () => {
    this.fetchPeople();
    this.fetchPlanets();
  }

  // peoples fetch
  fetchPeople = async () => {
    let fetchedData = [];
    for (let i = 1; i < 10; i++) {
      let url = `https://swapi.co/api/people/?page=${i}`
      const response = await fetch(url);
      const result = await response.json();
      fetchedData.push(...result.results);
    }
    const checkedHomeworlds = await this.fetchHomeWorld(fetchedData);
    const checkedSpecies = await this.fetchSpecies(checkedHomeworlds);
    this.setState({ people: checkedSpecies })
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








  // planets fetch
  
  fetchPlanets = async () => {
    let fetchedPlanetData = [];
    for (let i = 1; i < 8; i++) {
      let url = `https://swapi.co/api/planets/?page=${i}`
      const response = await fetch(url);
      const result = await response.json();
      fetchedPlanetData.push(...result.results);
    }
    const checkedPlanets = await this.fetchResidents(fetchedPlanetData);
    this.setState({ planets: checkedPlanets });
  }




  fetchResidents = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      if (planet.residents.length > 0) {
        let newArray = [];
        for (let i = 0; i < planet.residents.length; i++) {
          const response = await fetch(planet.residents[i])
          const result = await response.json()
          newArray.push(result.name);
        }
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: newArray})
        } else {
        return ({ planet: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: 'None.'})
        }

      })
    return Promise.all(unresolvedPromises)
  }

  pushMultipleResidents = (residents) => {
    console.log(residents)
    return residents;
    // this.setState({ planets: checkedPlanets });

  }






  // vehicles fetch

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
