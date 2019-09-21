import { ajax } from 'rxjs/ajax';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, catchError, concatMap, flatMap } from 'rxjs/operators';
import { of, throwError, concat, merge } from 'rxjs';

import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './ActionNames.js'

import{
	fetchRobotsFulfilled,
	fetchRobotsFailed
} from './Action.js'



const requestRobots = action$ =>
  action$.pipe(
    ofType(REQUEST_ROBOTS_PENDING),
    concatMap(action => {
      return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
        flatMap(response => {
          let returner = [];
          if (response) {
          	returner = of(fetchRobotsFulfilled(response));
          } else {
            console.log('inside error');
            throwError(response);
          }
          return returner;
        }),
        catchError(({ response }) => {
          return of(fetchRobotsFailed(`Error: ${response}`));
        })
      );
    })
  );

export const rootEpic = combineEpics(
  requestRobots
);

// export const requestRobots =  () => (dispatch) => {
// 	dispatch({type: REQUEST_ROBOTS_PENDING});
// 	fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
//       .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED , payload: error}))
// }