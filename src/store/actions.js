import { createAction } from 'redux-actions';

export const addTransaction = createAction('TRANSACTION_ADD');
export const removeTransaction = createAction('TRANSACTION_REMOVE');
export const addCategory = createAction('CATEGORY_ADD');
export const removeCategory = createAction('CATEGORY_REMOVE');
export const editCategory = createAction('CATEGORY_EDIT');
export const showTransactionCreationModal = createAction('TRANSACTION_CREATION_MODAL_SHOW');
export const clearData = createAction('DATA_CLEAR');
