/* combineReducers is not currently used, but eventually should be for modular code :D */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campi from './campi';
import students from './students';
import newStudent from './writeStudent'
import newCampus from './writeCampus'
import editStudent from './editStudent'
import editCampus from './editCampus'
import studentCampus from './student-campus'



const reducer = combineReducers({
  campi,
  students,
  newStudent,
  editStudent,
  editCampus,
  newCampus,
  studentCampus
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from './campi'
export * from './students'
export * from './writeStudent'
export * from './writeCampus'
export * from './editStudent'
export * from './editCampus'
export * from './student-campus'
