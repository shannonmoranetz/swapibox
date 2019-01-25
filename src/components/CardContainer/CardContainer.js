import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({ people, planets, vehicles, category }) => {
  
let peopleCards;

if (category === 'people') {
  peopleCards = people.map((person) => {
    return <Card key={Date.now()} people={person}/>
  })
  console.log(peopleCards)
}

  return (
    <div className="CardContainer">
      <ul>
        { peopleCards }
      </ul>
    </div>
  )
};