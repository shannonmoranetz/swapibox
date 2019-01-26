import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited}) => {

  let allCards;

  if (category === 'people') {
    allCards = cards.map((person) => {
      return <Card key={person.name} person={person} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    allCards = cards.map((planet) => {
      return <Card key={planet.name} planet={planet} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    allCards = cards.map((vehicle) => {
      return <Card key={vehicle.name} vehicle={vehicle} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'favorites') {
    allCards = cards.map((card) => {
        if (card.category === 'people') {
          return <Card key={card.name} person={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited} />
        } else if (card.category === 'planets') {
          return <Card key={card.name} planet={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
        } else if (card.category === 'vehicles') {
          return <Card key={card.name} vehicle={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
      }
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