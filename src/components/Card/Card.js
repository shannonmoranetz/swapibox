import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  componentDidMount = () => {
    console.log(this.props.item.residents)
  }

  passFavorited = (itemData) => {
    this.props.retrieveFavorited(itemData)
  }

  passUnfavorited = (itemData) => {
    this.props.removeFavorited(itemData)
  }

  checkFavoriteStatus = () => {
    let { item } = this.props
    let { isFavorited } = this.state
    this.setState({ isFavorited: !isFavorited })
    if (isFavorited === false) {
      this.passFavorited(item)
    } else {
      this.passUnfavorited(item)
    }
  }

  returnPeople = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={ this.state.isFavorited === true ? 'active' : 'inactive' }  
                onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">Name: {item.person}</p>
        <p className="homeworld">Homeworld: {item.homeworld}</p>
        <p className="population">Population: {item.population}</p>
        <p className="species">Species: {item.species}</p>
        <p className="language">Language: {item.language}</p>
      </div>
    )
  }

  returnPlanets = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={ this.state.isFavorited === true ? 'active' : 'inactive' }  
                onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">Planet: {item.planet}</p>
        <p className="terrain">Terrain: {item.terrain}</p>
        <p className="population">Population: {item.population}</p>
        <p className="climate">Climate: {item.climate}</p>
        <ul className="residents">Residents: {this.returnPlanetResidents()} </ul>
      </div>
    )
  }

  returnPlanetResidents = () => {
    if (this.props.item.residents !== 'None.') {
      return this.props.item.residents.map((resident) => {
          return <li>{resident}</li>
      })
    } else {
      return;
    }
  }

  returnVehicles = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={ this.state.isFavorited === true ? 'active' : 'inactive' }  
                onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">Name: {item.name}</p>
        <p className="model">Model: {item.model}</p>
        <p className="class">Class: {item.class}</p>
        <p className="passengers">Passengers: {item.passengers}</p>
      </div>
    )
  }

  returnFavorites = () => {
    let { item } = this.props;
    if ('homeworld' in item) {
      return this.returnPeople();
    }
    if ('climate' in item) {
      return this.returnPlanets();
    }
    if ('model' in item) {
      return this.returnVehicles();
    }
  }

  render() {
    let { category } = this.props
    if (category === 'people') {
      return this.returnPeople();
    } else if (category === 'planets') {
      return this.returnPlanets();
    } else if (category === 'vehicles') {
      return this.returnVehicles();
    } else if (category === 'favorites') {
      return this.returnFavorites();
    }
  }
}