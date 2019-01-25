import React, { Component } from 'react';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      buttonIsClicked: false
    }
  }

  passCategory = (e) => {
    let category = e.target.name;
    if (this.state.buttonIsClicked === false ) {
      this.props.retrieveCategory(category)
      this.setState({ buttonIsClicked: true })
    } else {
      this.displayClassButtons(category)
    }
  }

  displayAllButtons = () => {
    let categories = ['people', 'planets', 'vehicles']
    let allButtons = categories.map((category) => {
        return <button className={`${this.state.buttonClicked}`} name={`${category}`} onClick={this.passCategory}>{`${category}`}</button>
      })
    return allButtons;
  }



  
  displayClassButtons = (clickedValue) => {
    let categories = ['people', 'planets', 'vehicles']

    let Clicked = categories.filter((category) => {
      return category === clickedValue
    })

    let unClicked = categories.filter((category) => {
      return category !== clickedValue
    })

    return (Clicked, unClicked);
  }


  render() {
    if (this.state.buttonIsClicked === false) {
      return this.displayAllButtons();
    } else {
      return this.displayClassButtons();
    }
  }
}