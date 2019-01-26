import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited }) => {

  let allCards;

  if (category === 'people') {
    allCards = cards.map((person, i) => {
      return <Card key={i} item={person} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    allCards = cards.map((planet, i) => {
      return <Card key={i} item={planet} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    allCards = cards.map((vehicle, i) => {
      return <Card key={i} item={vehicle} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'favorites') {
    allCards = cards.map((card, i) => {
      return <Card key={i} item={card} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited} />
    })
  }

  return (
    <div className="CardContainer">
      <ul>
        { allCards }
      </ul>
    </div>
  )
};