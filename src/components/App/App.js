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
      vehicles: [],
      category: ''
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
    this.setState({ category: category });
    if (category === 'people') {
      this.populatePeople();
    } else if (category === 'planets') {
      this.populatePlanets();
    } else if (category === 'vehicles') {
      this.populateVehicles();
    }
  }

  // selectCardsToPass = async (category) => {
  //   if (category === 'people') {
  //     this.populatePeople();
  //   } else if (category === 'planets') {
  //     this.populatePlanets();
  //   } else if (category === 'vehicles') {
  //     this.populateVehicles();
  //   } else {
  //     return [];
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <ScrollText crawl={this.state.crawl}/>
        <Controls retrieveCategory={this.retrieveCategory}/>
        <CardContainer  people={this.state.people}
                        planets={this.state.planets}
                        vehicles={this.state.vehicles}/>
      </div>
    )
  }
}