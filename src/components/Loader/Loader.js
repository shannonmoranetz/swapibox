import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { FavoriteContainer } from '../FavoriteContainer/FavoriteContainer';

export const Loader = ({ people, planets, vehicles, category, dataIsLoaded, viewFavorites }) => {

  if (dataIsLoaded === false) {
    return (
      <div className="Loader">
        <p className="loading-text">loading</p>
      </div>
    )
  } else if (viewFavorites === true) {
    return (
      <FavoriteContainer  people={people}
                          planets={planets}
                          vehicles={vehicles}
                          category={category}/>
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