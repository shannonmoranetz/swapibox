import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      active: null
    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    this.props.retrieveCategory(category)
    this.setState({ active: e.target.name })
  }

  render() {
    let categories = ['people', 'planets', 'vehicles', `favorites`]
    let { isActive, active } = this.state
    return categories.map((category, i) => {
      return <button  active={isActive} 
                      className={ active === category ? 'pressed' : 'notpressed' }
                      key={i}     
                      name={`${category}`} 
                      onClick={this.passCategory}>{`${category}`}</button>
    }) 
  }
}