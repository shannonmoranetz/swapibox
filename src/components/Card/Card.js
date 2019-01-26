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

  render() {
    let { item } = this.props;
    if (this.props.category === 'people') {
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
    } else if (this.props.category === 'planets') {
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
    } else if (this.props.category === 'vehicles') {
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
    else if (this.props.category === 'favorites') {
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
  }
}