import React, { Component } from 'react';

export class PlanetCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited }, this.passFavorited(this.props.planet))
  }

  passFavorited = (planetData) => {
    this.props.retrieveFavorited(planetData)
  }

  render() {
    let { planet } = this.props;
    return(
      <div className="PlanetCard">
        <button className="favorite-person-toggle" onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{planet.planet}</p>
        <p className="homeworld">{planet.terrain}</p>
        <p className="population">{planet.population}</p>
        <p className="species">{planet.climate}</p>
        <p className="language">{planet.addedResidents}</p>
      </div>
    )
  }
}