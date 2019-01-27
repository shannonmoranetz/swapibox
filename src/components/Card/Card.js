import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  passFavorited = (itemData) => {
    this.props.retrieveFavorited(itemData)
  }

  passUnfavorited = (itemData) => {
    this.props.removeFavorited(itemData)
  }

  checkFavoriteStatus = () => {
    let { item } = this.props;
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
         <div className={ this.state.isFavorited === true ? 'fas fa-heart' : 'far fa-heart' }  
                onClick={this.checkFavoriteStatus}></div>
        <p className="name">{item.person}</p>
        <p className="data">Homeworld: {item.homeworld}</p>
        <p className="data">Population: {item.population}</p>
        <p className="data">Species: {item.species}</p>
        <p className="data">Language: {item.language}</p>
      </div>
    )
  }

  returnPlanets = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <div className={ this.state.isFavorited === true ? 'fas fa-heart' : 'far fa-heart' }  
                onClick={this.checkFavoriteStatus}></div>
        <p className="name">{item.planet}</p>
        <p className="data">Terrain: {item.terrain}</p>
        <p className="data">Population: {item.population}</p>
        <p className="data">Climate: {item.climate}</p>
        <ul className="data">Residents: {this.returnPlanetResidents()} </ul>
      </div>
    )
  }

  returnPlanetResidents = () => {
    let { item } = this.props
    if (item.residents !== 'None.') {
      return item.residents.map((resident, i) => {
          return <li className="subdata" key={i}>{resident}</li>
      })
    } else {
      return <li className="subdata">None.</li>
    }
  }

  returnVehicles = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <div className={ this.state.isFavorited === true ? 'fas fa-heart' : 'far fa-heart' }  
                onClick={this.checkFavoriteStatus}></div>
        <p className="name">{item.name}</p>
        <p className="data">Model: {item.model}</p>
        <p className="data">Class: {item.class}</p>
        <p className="data">Passengers: {item.passengers}</p>
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
    let { category } = this.props;
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