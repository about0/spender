import { combineReducers } from 'redux';
import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SHOW_TRANSACTION_CREATION_MODAL,
  SET_DEFAULT,
} from './actions';

const initialState = {
  transactions: [],
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
  showTransactionCreationModal: false,
};

function removeItem(arr, id) {
  const index = arr.findIndex(trn => trn.id === id);

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function addItem(arr, item) {
  return [...arr, { ...item, id: Date.now() }];
}

function transactionsReducer(state = initialState, action) {
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

    case SET_DEFAULT:
      return {
        ...state,
        initialState,
      };

    default:
      return state;
  }
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  categoriesReducer,
  transactionsReducer,
});

export default rootReducer;
