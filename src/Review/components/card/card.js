import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './card.css';

export default function Card(props) {
  const {
    korean,
    english,
    language,
    cardNumber,
    selectedCard,
  } = props;
  const [lang, setLang] = useState(language);
  const handleClick = () => {
    lang === 'eng' ? setLang('kor') : setLang('eng');
  };
  // TODO find way to adjust top and left values to center to card
  // find way to make other card positioned slightly off-kilter
  const cardDiff = selectedCard - cardNumber;
  const cardOpacity = 1 - (Math.abs(cardDiff) / 3);
  const cardStyle = {
    opacity: cardOpacity,
    position: 'absolute',
    top: 50,
    left: 50,
    zIndex: cardDiff,
  };
  return (
    <div className="card" style={cardStyle}>
      <h1 data-testid="display" className="displayed-text">{lang === 'eng' ? english : korean}</h1>
      <button type="button" data-testid="check-button" onClick={handleClick}>check</button>
    </div>
  );
}
