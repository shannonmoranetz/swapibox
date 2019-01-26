import React from 'react';
import { PersonCard } from '../PersonCard/PersonCard';
import { PlanetCard } from '../PlanetCard/PlanetCard';
import { VehicleCard } from '../VehicleCard/VehicleCard';

export const CardContainer = ({ cards, category, retrieveFavorited, removeFavorited}) => {

  console.log(category)
  let allCards;

  if (category === 'people') {
    allCards = cards.map((person) => {
      console.log('1fr')
      return <PersonCard key={person.name} person={person} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    console.log('2fr')
    allCards = cards.map((planet) => {
      return <PlanetCard key={planet.name} planet={planet} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    console.log('3fr')
    allCards = cards.map((vehicle) => {
      return <VehicleCard key={vehicle.name} vehicle={vehicle} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'favorites') {
    allCards = cards.map((card) => {
      console.log(card.category)
        if (card.category === 'people') {
          console.log('fireFavePerson')
          return <PersonCard key={card.name} person={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited} />
        } else if (card.category === 'planets') {
          console.log('fireFavePlanet')
          return <PlanetCard key={card.name} planet={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
        } else if (card.category === 'vehicles') {
          console.log('fireFaveVehicles')
          return <VehicleCard key={card.name} vehicle={card} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
      }
    })
  }


  // when you press favorites button it sets category 

  return (
    <div className="CardContainer">
      <ul>
        { allCards }
      </ul>
    </div>
  )
};