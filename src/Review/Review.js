import React, { useEffect } from 'react';
import Loading from './components/loading';
import './Review.css';
import CardContainer from './components/cardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../store/utils/api';

export default function Review() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const selectedCard = useSelector((state) => state.cards.selectedItem);
  useEffect(() => {
    dispatch(getCards());
    // eslint-disable-line
  }, []);
  return (
    <div className="review-page">
      {cards ? <CardContainer cards={cards} selectedCard={selectedCard} /> : <Loading />}
    </div>
  );
}
