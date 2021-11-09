import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Flash Cards</h1>
      <div className="buttons">
        <button type="button" className="header-button">
          <Link to="">review</Link>
        </button>
        <button type="button" className="header-button">
          <Link to="add">add</Link>
        </button>
      </div>
    </div>
  );
}
