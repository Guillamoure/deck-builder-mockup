import { createStore, combineReducers } from 'redux';
import deck from './reducers/deck';
import gameState from './reducers/game_state';
import characters from './reducers/characters';

const store = createStore(combineReducers({deck, gameState, characters}));

export default store;
