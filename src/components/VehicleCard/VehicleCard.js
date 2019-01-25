import React, { Component } from 'react';

export class VehicleCard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    let { vehicle } = this.props;
    return(
      <div className="VehicleCard">
        <p className="name">{vehicle.name}</p>
        <p className="homeworld">{vehicle.model}</p>
        <p className="population">{vehicle.class}</p>
        <p className="species">{vehicle.passengers}</p>
      </div>
    )
  }
}