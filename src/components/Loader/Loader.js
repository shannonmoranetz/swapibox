import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';

export const Loader = ({ people, planets, vehicles, category, dataIsLoaded }) => {

  if (dataIsLoaded === false) {
    return (
      <div className="Loader">
        <p className="loading-text">loading</p>
      </div>
    )
  } else {
    return (
      <CardContainer  people={people}
                      planets={planets}
                      vehicles={vehicles}
                      category={category}/>
    )
  }
};