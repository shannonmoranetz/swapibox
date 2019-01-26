import React, { Component } from 'react';

export class PersonCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    }
  }

  checkFavoriteStatus = () => {
    this.setState({ isFavorited: !this.state.isFavorited })
    if (this.state.isFavorited === false) {
      this.passFavorited(this.props.person)
    } else {
      this.passUnfavorited(this.props.person)
    }
  }

  passFavorited = (personData) => {
    this.props.retrieveFavorited(personData)
  }

  passUnfavorited = (personData) => {
    this.props.removeFavorited(personData)
  }

  render() {
    let { person } = this.props;
    return(
      <div className="PersonCard">
        <button className={
                this.state.isFavorited === true ? 'active' : 'inactive'
              }  onClick={this.checkFavoriteStatus}>favorite</button>
        <p className="name">{person.person}</p>
        <p className="homeworld">{person.homeworld}</p>
        <p className="population">{person.population}</p>
        <p className="species">{person.species}</p>
        <p className="language">{person.language}</p>
      </div>
    )
  }
}