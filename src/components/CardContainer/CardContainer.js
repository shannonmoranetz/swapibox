import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited}) => {

  let allCards;

  if (category === 'people') {
    allCards = cards.map((person) => {
      return <Card key={person.name} item={person} favorite={false} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    allCards = cards.map((planet) => {
      return <Card key={planet.name} item={planet} favorite={false} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    allCards = cards.map((vehicle) => {
      return <Card key={vehicle.name} item={vehicle} favorite={false} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'favorites') {
    allCards = cards.map((card) => {
      return <Card key={card.name} item={card} favorite={true} category={category} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited} />
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