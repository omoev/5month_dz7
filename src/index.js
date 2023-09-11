import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers';
import {logger} from 'redux-logger/src'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './App';


const store = createStore(rootReducer, applyMiddleware(logger, thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
