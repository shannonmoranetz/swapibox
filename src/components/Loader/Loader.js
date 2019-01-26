import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';

export const Loader = ({ category, dataIsLoaded, retrieveFavorited, removeFavorited, favorites, cards }) => {

  console.log(cards)
  
  if (dataIsLoaded === false) {
    return (
      <div className="Loader">
        <p className="loading-text">loading</p>
      </div>
    )
  }
  else {
    return (
      <CardContainer  cards={cards}
                      category={category}
                      favorites={favorites}
                      retrieveFavorited={retrieveFavorited}
                      removeFavorited={removeFavorited} />
    )
  }
};