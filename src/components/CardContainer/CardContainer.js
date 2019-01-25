import React from 'react';
import { PersonCard } from '../PersonCard/PersonCard';
import { PlanetCard } from '../PlanetCard/PlanetCard';
import { VehicleCard } from '../VehicleCard/VehicleCard';

export const CardContainer = ({ people, planets, vehicles, category, retrieveFavorited }) => {

  let cards;

  if (category === 'people') {
    cards = people.map((person) => {
      return <PersonCard key={person.name} person={person} retrieveFavorited={retrieveFavorited}/>
    })
  } else if (category === 'planets') {
    cards = planets.map((planet) => {
      return <PlanetCard key={planet.name} planet={planet} retrieveFavorited={retrieveFavorited}/>
    })
  } else {
    cards = vehicles.map((vehicle) => {
      return <VehicleCard key={vehicle.name} vehicle={vehicle} retrieveFavorited={retrieveFavorited}/>
    })
  }

  return (
    <div className="CardContainer">
      <ul>
        { cards }
      </ul>
    </div>
  )
};