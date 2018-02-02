import { createStore, applyMiddleware } from 'react';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const Store = createStore(rootReducer, applyMiddleware(promiseMiddleware()));

export default Store;