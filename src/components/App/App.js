import React, { Component } from 'react';
import '../../main.scss';
import { fetchScrollText, fetchPeople, fetchPlanets, fetchVehicles } from '../../apiCalls';
import { Controls } from '../Controls/Controls';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { ScrollText } from '../ScrollText/ScrollText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      crawl: [],
      people: [],
      planets: [],
      vehicles: [],
      dataIsLoaded: null
    }
  }
  
  componentDidMount = () => {
    this.populateRandomScrollText();
  }
  
  populateRandomScrollText = async () => {
    let randomCrawlNum = Math.floor(Math.random() * 6) + 1;
    const randomCrawl = await fetchScrollText();
    this.setState({ crawl: await randomCrawl[randomCrawlNum] })
  }
  
  populatePeople = async () => {
    this.setState({ people: await fetchPeople(), dataIsLoaded: true })
  }
  
  populatePlanets = async () => {
    this.setState({ planets: await fetchPlanets(), dataIsLoaded: true })
  }
  
  populateVehicles = async () => {
    this.setState({ vehicles: await fetchVehicles(), dataIsLoaded: true })
  }

  retrieveCategory = (category) => {
    this.setState({ category: category});
    if (category === 'people' && this.state.people.length === 0) {
      this.updateLoadStatus();
      this.populatePeople();
    } else if (category === 'planets' && this.state.vehicles.length === 0) {
      this.updateLoadStatus();
      this.populatePlanets();
    } else if (category === 'vehicles' && this.state.vehicles.length === 0) {
      this.updateLoadStatus();
      this.populateVehicles();
    }
  }

  updateLoadStatus = () => {
    this.setState({ dataIsLoaded: false })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ScrollText crawl={this.state.crawl}/>
        <Controls   retrieveCategory={this.retrieveCategory}/>
        <Loader     people={this.state.people}
                    planets={this.state.planets}
                    vehicles={this.state.vehicles}
                    category={this.state.category}
                    dataIsLoaded={this.state.dataIsLoaded} />
      </div>
    )
  }
}