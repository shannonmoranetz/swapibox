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
      people: []
    }
  }

  componentDidMount = () => {
    this.fetchPeople();
  }

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
      return ({ ...person, homeworld: result.name, population: result.population 
      })
    })
    return Promise.all(unresolvedPromises);
}

  fetchSpecies = (fetchedPeople) => {
    const unresolvedPromises = fetchedPeople.map(async person => {
      if (person.species.length > 0) {
        const response = await fetch(person.species[0])
        const result = await response.json();
        return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: result.name});
      } else {
        return ({ person: person.name, homeworld: person.homeworld, population: person.population, species: 'Unknown'});
      }
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
