import React from 'react';
import { PersonCard } from '../PersonCard/PersonCard';
import { PlanetCard } from '../PlanetCard/PlanetCard';
import { VehicleCard } from '../VehicleCard/VehicleCard';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited}) => {

  let allCards;

  if (category === 'people') {
    allCards = cards.map((person) => {
      return <PersonCard key={person.name} person={person} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    allCards = cards.map((planet) => {
      return <PlanetCard key={planet.name} planet={planet} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    allCards = cards.map((vehicle) => {
      return <VehicleCard key={vehicle.name} vehicle={vehicle} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'favorites') {
    allCards = cards.map((card) => {
        if (card.category === 'people') {
          return <PersonCard key={card.name} person={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited} />
        } else if (card.category === 'planets') {
          return <PlanetCard key={card.name} planet={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
        } else if (card.category === 'vehicles') {
          return <VehicleCard key={card.name} vehicle={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
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