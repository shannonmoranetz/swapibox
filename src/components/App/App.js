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
      favorites: [],
      viewFavorites: false,
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
    } else if (category === 'planets' && this.state.planets.length === 0) {
      this.updateLoadStatus();
      this.populatePlanets();
    } else if (category === 'vehicles' && this.state.vehicles.length === 0) {
      this.updateLoadStatus();
      this.populateVehicles();
    }
  }

  retrieveFavorited = (favoritedData) => {
    console.log(favoritedData)
    if (this.state.favorites.includes(favoritedData)) {
      return;
    } else {
      this.setState({ favorites: [...this.state.favorites, favoritedData] })
    }
  }

  removeFavorited = (favoritedData) => {
    let oldFavoritedData = this.state.favorites;
    let newFavoritedData = oldFavoritedData.filter((favoriteItem) => {
      return favoriteItem !== favoritedData;
    })
    this.setState({ favorites: newFavoritedData })
  }

  updateLoadStatus = () => {
    this.setState({ dataIsLoaded: false })
  }

  render() {
    let { category } = this.state
    return (
      <div className="App">
        <Header />
        <ScrollText crawl={this.state.crawl}/>
        <Controls   retrieveCategory={this.retrieveCategory} 
                    favorites={this.state.favorites} />
        <Loader     category={this.state.category}
                    cards={this.state[category]}
                    dataIsLoaded={this.state.dataIsLoaded}
                    favorites={this.state.favorites}
                    viewFavorites={this.state.viewFavorites} 
                    retrieveFavorited={this.retrieveFavorited}
                    removeFavorited={this.removeFavorited} />
      </div>
    )
  }
}