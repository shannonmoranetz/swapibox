import React from 'react';
import { PersonCard } from '../PersonCard/PersonCard';
import { PlanetCard } from '../PlanetCard/PlanetCard';
import { VehicleCard } from '../VehicleCard/VehicleCard';

export const CardContainer = ({ people, planets, vehicles, category, retrieveFavorited, removeFavorited }) => {

  let cards;

  if (category === 'people') {
    cards = people.map((person) => {
      return <PersonCard key={person.name} person={person} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'planets') {
    cards = planets.map((planet) => {
      return <PlanetCard key={planet.name} planet={planet} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
    })
  } else if (category === 'vehicles') {
    cards = vehicles.map((vehicle) => {
      return <VehicleCard key={vehicle.name} vehicle={vehicle} retrieveFavorited={retrieveFavorited} removeFavorited={removeFavorited}/>
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