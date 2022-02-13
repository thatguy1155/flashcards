import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import cards from './cards';

const appReducer = combineReducers({
  cards,
});

const rootReducer = (state, action) => appReducer(state, action);

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
