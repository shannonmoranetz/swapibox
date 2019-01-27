import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited }) => {

  let allCards;

  if (category === 'people') {
    allCards = cards.map((person, i) => {
      return <Card category={category} item={person} key={i} removeFavorited={removeFavorited} retrieveFavorited={retrieveFavorited} />
    })
  } else if (category === 'planets') {
    allCards = cards.map((planet, i) => {
      return <Card category={category} item={planet} key={i} removeFavorited={removeFavorited} retrieveFavorited={retrieveFavorited} />
    })
  } else if (category === 'vehicles') {
    allCards = cards.map((vehicle, i) => {
      return <Card category={category} item={vehicle} key={i} removeFavorited={removeFavorited} retrieveFavorited={retrieveFavorited} />
    })
  } else if (category === 'favorites') {
    allCards = cards.map((favorite, i) => {
      return <Card category={category} item={favorite} key={i} removeFavorited={removeFavorited} retrieveFavorited={retrieveFavorited}  />
    })
  }

  return (
    <div className="CardContainer">
      <ul className="card-list">
        { allCards }
      </ul>
    </div>
  )
};