import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      active: null,
      viewFavorites: false
    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    this.props.retrieveCategory(category)
    this.setState({ active: e.target.name })
  }

  render() {
    let categories = ['people', 'planets', 'vehicles', `favorites (${this.props.favorites.length})`]
    return categories.map((category) => {
      return <button active={this.state.isActive} 
      className={
        this.state.active === category ? 'active' : 'inactive'
      }
      name={`${category}`} onClick={this.passCategory}>{`${category}`}</button>
    })

  }
}