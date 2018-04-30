import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();

const persistConfig = {
  key: 'root',
  storage, // see "Merge Process" section for details.
};

const persistentReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistentReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware)),
);

export const persistor = persistStore(store);
