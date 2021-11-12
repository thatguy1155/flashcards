import React from 'react';
import Card from './components/card/card';
import './Review.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Review() {
  return (
    <div className="review-page">
      <div className="nav-buttons">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
      <Card english="hello" korean="안녕" language="eng" />
    </div>
  );
}
