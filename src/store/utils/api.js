import axios from 'axios';
import { get, post } from '../cards';

export const getCards = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://127.0.0.1:5000/flashcard');
    dispatch(get(data));
  } catch (error) {
    console.error(error);
  }
};
