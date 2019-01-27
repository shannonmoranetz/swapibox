import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';

export const Loader = ({ cards, category, dataIsLoaded, favorites, removeFavorited, retrieveFavorited,  }) => {
  
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
                      removeFavorited={removeFavorited}
                      retrieveFavorited={retrieveFavorited} />
    )
  }
};