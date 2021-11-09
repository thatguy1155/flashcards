import React, { useState } from 'react';
import './card.css';

export default function Card(props) {
  const { korean, english, language } = props;
  const [lang, setLang] = useState(language);
  const handleClick = () => {
    lang === 'eng' ? setLang('kor') : setLang('eng');
  };
  return (
    <div className="card">
      <h1 data-testid="display" className="displayed-text">{lang === 'eng' ? english : korean}</h1>
      <button type="button" data-testid="check-button" onClick={handleClick}>check</button>
    </div>
  );
}
