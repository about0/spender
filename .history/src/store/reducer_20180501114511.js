import { combineReducers } from 'redux';
import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SHOW_TRANSACTION_CREATION_MODAL,
  CLEAR_TRANSACTION_DATA,
} from './actions';

const initialState = {
  transactions: [],
  showTransactionCreationModal: false,
  categories: [
    {
      id: 1,
      name: 'Transport',
      description: 'Expances with transport',
    },
    {
      id: 2,
      name: 'Medicine',
      description: 'Medicine stuff',
    },
  ],
};

function removeItem(arr, id) {
  const index = arr.findIndex(trn => trn.id === id);

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function addItem(arr, item) {
  return [...arr, { ...item, id: Date.now() }];
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: addItem(state.transactions, action.payload),
      };

    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: removeItem(state.transactions, action.payload.id),
      };

    case SHOW_TRANSACTION_CREATION_MODAL:
      return {
        ...state,
        showTransactionCreationModal: action.payload.visible,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: addItem(state.categories, action.payload),
      };

    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: removeItem(state.categories, action.payload.id),
      };

    case CLEAR_TRANSACTION_DATA:
      return initialState;

    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   appReducer,
// });

export default appReducer;
