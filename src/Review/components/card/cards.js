import React, { useState, useEffect } from 'react';
import Card from './card';
import './card.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
// TODO: Change the CSS to execute the vision. Set up the card selection with the arrows.
export default function Cards({ cards, selectedCard }) {
  const cardStyle = {
    alignSelf: 'left',
  };
  return (
    <div className="card-wrapper">
      {cards.map((card, index) => <Card korean={card.kor} english={card.eng} key={uuidv4()} cardNumber={index} selectedCard={selectedCard} style={cardStyle} />)}
    </div>
  );
}
