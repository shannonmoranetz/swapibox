import React, { Component } from 'react';

export class PersonCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited }, this.passFavorited(this.props.person))
  }

  passFavorited = (personData) => {
    console.log(personData)
    this.props.retrieveFavorited(personData)
  }

  render() {
    let { person } = this.props;
    return(
      <div className="PersonCard">
        <button className="favorite-person-toggle" onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{person.person}</p>
        <p className="homeworld">{person.homeworld}</p>
        <p className="population">{person.population}</p>
        <p className="species">{person.species}</p>
        <p className="language">{person.language}</p>
      </div>
    )
  }
}