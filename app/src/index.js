import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './store/reducers/reducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    rootElement);