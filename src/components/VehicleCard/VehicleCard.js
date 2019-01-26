import React, { Component } from 'react';

export class VehicleCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited })
    if (this.state.isFavorited === false) {
      this.passFavorited(this.props.vehicle)
    } else {
      this.passUnfavorited(this.props.vehicle)
    }
  }

  passFavorited = (vehicleData) => {
    this.props.retrieveFavorited(vehicleData)
  }

  passUnfavorited = (vehicleData) => {
    this.props.removeFavorited(vehicleData)
  }

  render() {
    let { vehicle } = this.props;
    return(
      <div className="VehicleCard">
        <button className={
                this.state.isFavorited === true ? 'active' : 'inactive'
              } 
              onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{vehicle.name}</p>
        <p className="homeworld">{vehicle.model}</p>
        <p className="population">{vehicle.class}</p>
        <p className="species">{vehicle.passengers}</p>
      </div>
    )
  }
}