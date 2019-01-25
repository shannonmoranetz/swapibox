import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    this.props.retrieveCategory(category)
  }

  changeButtonColor = () => {
    this.setState({isClicked: !this.state.isClicked})
 }

  render() {
    let buttons;
    let categories = ['people', 'planets', 'vehicles']
    // if (this.state.isClicked) {
      buttons = categories.map((category) => {
      return <button className={`${category}`} name={`${category}`} onClick={this.passCategory}>{`${category}`}</button>
      })
    // }
    return(
      <div className="Controls">
        {/* <button className="people-button" name="people" onClick={this.passCategory}>People</button>
        <button className="planets-button" name="planets" onClick={this.passCategory}>Planets</button>
        <button className="vehicles-button" name="vehicles" onClick={this.passCategory}>Vehicles</button> */}
        { buttons }
      </div>
    )
  }
}