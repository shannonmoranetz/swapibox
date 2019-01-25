import React, { Component } from 'react';

export class PersonCard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    let { person } = this.props;
    return(
      <div className="Card">
        <p className="name">{person.person}</p>
        <p className="homeworld">{person.homeworld}</p>
        <p className="population">{person.population}</p>
        <p className="species">{person.species}</p>
        <p className="language">{person.language}</p>
      </div>
    )
  }
}