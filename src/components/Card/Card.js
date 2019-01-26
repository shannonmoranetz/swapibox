import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  componentDidMount = () => {
    console.log('RE-RENDER')
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited })
    if (this.state.isFavorited === false) {
      this.passFavorited(this.props.item)
    } else {
      this.passUnfavorited(this.props.item)
    }
  }

  passFavorited = (itemData) => {
    this.props.retrieveFavorited(itemData)
  }

  passUnfavorited = (itemData) => {
    this.props.removeFavorited(itemData)
  }

  returnPeople = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={
                this.state.isFavorited === true ? 'active' : 'inactive'
              }  onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{item.person}</p>
        <p className="homeworld">{item.homeworld}</p>
        <p className="population">{item.population}</p>
        <p className="species">{item.species}</p>
        <p className="language">{item.language}</p>
      </div>
    )
  }

  returnPlanets = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={
                this.state.isFavorited === true ? 'active' : 'inactive'
              }  onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{item.planet}</p>
        <p className="homeworld">{item.terrain}</p>
        <p className="population">{item.population}</p>
        <p className="species">{item.climate}</p>
        <p className="language">{item.addedResidents}</p>
      </div>
    )
  }

  returnVehicles = () => {
    let { item } = this.props;
    return (
      <div className="Card">
        <button className={
                this.state.isFavorited === true ? 'active' : 'inactive'
              } 
              onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{item.name}</p>
        <p className="homeworld">{item.model}</p>
        <p className="population">{item.class}</p>
        <p className="species">{item.passengers}</p>
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
    if (this.props.category === 'people') {
      return this.returnPeople();
    } else if (this.props.category === 'planets') {
      return this.returnPlanets();
    } else if (this.props.category === 'vehicles') {
      return this.returnVehicles();
    } else if (this.props.category === 'favorites') {
      return this.returnFavorites();
    }
  }
}