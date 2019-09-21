import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { storeConfig } from './storeConfig.js';
//import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
//import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import {searchRobots, requestRobots} from './reducers';
//import {createLogger} from 'redux-logger';
//import { createEpicMiddleware } from 'redux-observable';


ReactDOM.render(
	<Provider store={storeConfig()}>
	<App />
	</Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
