import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { FavoriteContainer } from '../FavoriteContainer/FavoriteContainer';

export const Loader = ({ category, dataIsLoaded, viewFavorites, retrieveFavorited, removeFavorited, favorites, cards }) => {

  if (dataIsLoaded === false) {
    return (
      <div className="Loader">
        <p className="loading-text">loading</p>
      </div>
    )
  }
  // else if (viewFavorites === true) {
  //   return (
  //     <FavoriteContainer  people={people}
  //                         planets={planets}
  //                         vehicles={vehicles}
  //                         category={category}
  //                         favorites={favorites}/>
  //   )
  // } 
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