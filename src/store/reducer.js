import { handleActions } from 'redux-actions';
import {
  addTransaction,
  removeTransaction,
  addCategory,
  editCategory,
  removeCategory,
  clearData,
  showTransactionCreationModal,
} from './actions';

const initialState = {
  balance: 0,
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

const reducer = handleActions(
  {
    [addTransaction]: (state, action) => ({
      ...state,
      transactions: addItem(state.transactions, action.payload),
    }),
    [showTransactionCreationModal]: (state, action) => ({
      ...state,
      showTransactionCreationModal: action.payload,
    }),
    [removeTransaction]: (state, action) => ({
      ...state,
      transactions: removeItem(state.transactions, action.payload),
    }),
    [addCategory]: (state, action) => ({
      ...state,
      categories: addItem(state.categories, action.payload),
    }),
    [removeCategory]: (state, action) => ({
      ...state,
      categories: removeItem(state.categories, action.payload),
    }),
    [clearData]: () => initialState,
  },
  initialState,
);

export default reducer;
