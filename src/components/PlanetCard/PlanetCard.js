import React, { Component } from 'react';

export class PlanetCard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    let { planet } = this.props;
    return(
      <div className="PlanetCard">
        <p className="name">{planet.planet}</p>
        <p className="homeworld">{planet.terrain}</p>
        <p className="population">{planet.population}</p>
        <p className="species">{planet.climate}</p>
        <p className="language">{planet.addedResidents}</p>
      </div>
    )
  }
}