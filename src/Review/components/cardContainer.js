import React from 'react';
import Cards from './card/cards';
import '../Review.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function CardContainer({ cards, selectedCard }) {
  return (
    <div className="card-container-content">
      <div className="nav-buttons">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
      <Cards cards={cards} selectedCard={selectedCard} />
    </div>
  );
}
