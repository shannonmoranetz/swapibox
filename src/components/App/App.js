import React, { Component } from 'react';
import '../../main.scss';
import { fetchScrollText, fetchPeople, fetchPlanets, fetchVehicles } from '../../apiCalls';
import { CardContainer } from '../CardContainer/CardContainer';
import { Controls } from '../Controls/Controls';
import { Header } from '../Header/Header';
import { ScrollText } from '../ScrollText/ScrollText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: [],
      people: [],
      planets: [],
      vehicles: []
    }
  }
  
  componentDidMount = () => {
    this.populateScrollText();
  }
  
  populateScrollText = async () => {
    let randomCrawlNum = Math.floor(Math.random() * 6) + 1;
    const randomCrawl = await fetchScrollText();
    this.setState({ crawl: await randomCrawl[randomCrawlNum].crawl })
  }
  
  populatePeople = async () => {
    if (this.state.people.length === 0) {
      console.log('ppl not in state...')
      this.setState({ people: await fetchPeople() })
    }
    return this.state.people;
  }
  
  populatePlanets = async () => {
    if (this.state.planets.length === 0) {
      console.log('planets not in state...')
      this.setState({ planets: await fetchPlanets() })
    }
    return this.state.planets;
  }
  
  populateVehicles = async () => {
    if (this.state.vehicles.length === 0) {
      console.log('vehicles not in state...')
      this.setState({ vehicles: await fetchVehicles() })
    }
    return this.state.vehicles;
  }

  retrieveCategory = (category) => {
    if (category === 'people') {
      this.populatePeople();
    }
    else if (category === 'planets') {
      this.populatePlanets();
    }
    else {
      this.populateVehicles();
    }
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Header />
        <ScrollText />
        <Controls retrieveCategory={this.retrieveCategory}/>
        <CardContainer />
        <p>{this.state.crawl}</p>
      </div>
    )
  }
}
