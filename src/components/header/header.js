import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Flash Cards</h1>
      <div className="buttons">
        <button>review</button>
        <button>add</button>
      </div>
    </div>
  );
}
