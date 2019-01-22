import React, { Component } from 'react';
import '../../main.scss';
import { CardContainer } from '../CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PERU, BABY</h1>
        <CardContainer />
      </div>
    );
  }
}

export default App;
