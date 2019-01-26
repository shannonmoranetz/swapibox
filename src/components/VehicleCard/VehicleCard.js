import React, { Component } from 'react';

export class VehicleCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited }, this.passFavorited(this.props.vehicle))
  }

  passFavorited = (vehicleData) => {
    this.props.retrieveFavorited(vehicleData)
  }

  render() {
    let { vehicle } = this.props;
    return(
      <div className="VehicleCard">
        <button className="favorite-person-toggle" onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{vehicle.name}</p>
        <p className="homeworld">{vehicle.model}</p>
        <p className="population">{vehicle.class}</p>
        <p className="species">{vehicle.passengers}</p>
      </div>
    )
  }
}