import React, { Component } from 'react';
import './Card.scss';

export class Card extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="Card">
        <p>im the card!</p>
      </div>
    )
  }
}