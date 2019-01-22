import React from 'react';
import './CardContainer.scss';
import { Card } from '../Card/Card';

export const CardContainer = () => {
  return (
    <div className="CardContainer">
      <p>im the card container</p>
      <Card />
    </div>
  )
};