import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/es6/array'
import 'core-js/es6/symbol'
import smoothscroll from 'smoothscroll-polyfill'
import 'intersection-observer'

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
//import App from './AppBasicTests';
import App from './App'
//import App from './App-redux-tests';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware 	from 'redux-thunk';
import rootReducer from './Listeners';

smoothscroll.polyfill()

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
