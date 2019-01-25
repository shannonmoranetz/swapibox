import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    this.props.retrieveCategory(category)
  }

  render() {
    return(
      <div className="Controls">
        <p>Controls:</p>
        <button className="people-button" name="people" onClick={this.passCategory}>People</button>
        <button className="planets-button" name="planets" onClick={this.passCategory}>Planets</button>
        <button className="vehicles-button" name="vehicles" onClick={this.passCategory}>Vehicles</button>
      </div>
    )
  }
}