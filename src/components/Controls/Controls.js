import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    this.checkClicked(e)
    this.checkUnclicked(e)
    this.props.retrieveCategory(category)
  }

  checkClicked = (e) => {
    let categories = ['people', 'planets', 'vehicles']
    let Clicked = categories.filter((category) => {
      return category === e.target.name
    })
    console.log('clicked: ', Clicked)
    return Clicked;
  }

  checkUnclicked = (e) => {
    let categories = ['people', 'planets', 'vehicles']
    let unClicked = categories.filter((category) => {
      return category !== e.target.name
    })
    console.log('UNclicked: ', unClicked)
    return unClicked;
  }

  render() {
    let categories = ['people', 'planets', 'vehicles']

    let buttons = categories.map((category) => {
        return <button className={`${this.state.buttonClicked}-active`} name={`${category}`} onClick={this.passCategory}>{`${category}`}</button>
      })

    return (
      buttons
    )

  }
}