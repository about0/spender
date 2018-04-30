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
  categories: [],
};

function removeItem(arr, id) {
  const index = arr.findIndex(trn => trn.id === id);

  return [...arr.splice(index, 1), ...arr.splice(index + 1)];
}

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
            note: action.payload.note,
            date: Date.now(),
          },
        ],
      };

    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: removeItem(state.transactions, action.payload.id),
      };

    default:
      return state;
  }
}

function category(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          { name: action.payload.name, id: action.payload.id },
        ],
      };

    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: removeItem(state.categories, action.payload.id),
      };

    default:
      return state;
  }
}
