import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greetings: 'hi',
};

function rootReducer(state = initialState, action) {
  switch (action.type){
    case 'GET_GREETINGS_SUCCESS':
      return {
        ...state,
        greetings: action.payload.greetings
      };
      default:
        return state;
  }
}

export const store = createStore( rootReducer
  , applyMiddleware(thunk));