import { combineReducers } from 'redux';
import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
} from 'actions';

const initialState = {
  transactions: [],
};

function transaction(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: action.payload.id,
            category: action.payload.category,
            amount: action.payload.amount,
          },
        ],
      };

    default:
      return state;
  }
}
