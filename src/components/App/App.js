import React, { Component } from 'react';
import '../../main.scss';
import { fetchScrollText, fetchPeople, fetchPlanets, fetchVehicles } from '../../apiCalls';
import { Controls } from '../Controls/Controls';
import { Loader } from '../Loader/Loader';
import { ScrollText } from '../ScrollText/ScrollText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      crawl: [],
      dataIsLoaded: null,
      favorites: [],
      people: [],
      planets: [],
      vehicles: []
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

  updateLoadStatus = () => {
    this.setState({ dataIsLoaded: false })
  }
  
  retrieveCategory = (category) => {
    let { people, planets, vehicles } = this.state
    this.setState({ category: category});
    if (category === 'people' && people.length === 0) {
      this.updateLoadStatus();
      this.populatePeople();
    } else if (category === 'planets' && planets.length === 0) {
      this.updateLoadStatus();
      this.populatePlanets();
    } else if (category === 'vehicles' && vehicles.length === 0) {
      this.updateLoadStatus();
      this.populateVehicles();
    }
  }

  retrieveFavorited = (favoritedData) => {
    let { favorites } = this.state
    if (favorites.includes(favoritedData)) {
      return;
    } else {
      this.setState({ favorites: [...favorites, favoritedData] })
    }
  }

  removeFavorited = (favoritedData) => {
    let oldFavoritedData = this.state.favorites;
    let newFavoritedData = oldFavoritedData.filter((favoriteItem) => {
      return favoriteItem !== favoritedData;
    })
    this.setState({ favorites: newFavoritedData })
  }

  render() {
    let { crawl, category, dataIsLoaded, favorites } = this.state
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">SwapiBox</h1>
        </header>
        <ScrollText crawl={crawl}/>
        <Controls   favorites={favorites}
                    retrieveCategory={this.retrieveCategory} />
        <Loader     category={category}
                    cards={this.state[category]}
                    dataIsLoaded={dataIsLoaded}
                    removeFavorited={this.removeFavorited}
                    retrieveFavorited={this.retrieveFavorited} />
      </div>
    )
  }
}