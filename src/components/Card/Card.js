import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    console.log(this.props.category)
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
    if ('climate' in item) {
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
    if ('model' in item) {
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
  }

  render() {
    let { item, favorite } = this.props;

    if (this.props.category === 'people' && favorite === false) {
      return this.returnPeople();
    } else if (this.props.category === 'planets' && favorite === false) {
      return this.returnPlanets();
    } else if (this.props.category === 'vehicles' && favorite === false) {
      return this.returnVehicles();
    } 
    
    
    else if (favorite === true) {
      return this.returnFavorites();
    }

  }
}