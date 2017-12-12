import axios from 'axios';
// import socket from 'socket';

const GET_CAMPI = 'GET_CAMPI';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS_ARRAY = 'UPDATE_CAMPUS_ARRAY'

export const getCampi = function(campi){
  return {
    type: GET_CAMPI,
    campi
  }
}

export const addCampus = function(campus){
  return {
    type: ADD_CAMPUS,
    campus
  }
}

export const removeCampus = function(campus){

  return {
    type: REMOVE_CAMPUS,
    campus
  }
}

export const updateCampusArray = function(campus){

  return {
    type: UPDATE_CAMPUS_ARRAY,
    campus
  }
}

export function fetchCampi (){

  return function thunk(dispatch) {

    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campi => {
        const action = getCampi(campi);
        dispatch(action)
      })
  }
}

export function sendNewCampus (campus, history){

  return function thunk(dispatch){
    return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(addCampus(newCampus));
      history.push(`/campi/${newCampus.id}`)
    })
  }
}

export function deleteCampus(campus, history){

  return function thunk(dispatch){
    return axios.delete('/api/campus/' + campus.id, campus)
    .then(res => res.data)
    .then(data => {
      history.push('/campi')
      dispatch(removeCampus(campus))
    })
  }
}

export default function reducer (state=[], action){

  switch (action.type){

    case GET_CAMPI:
         return action.campi;

    case ADD_CAMPUS:
      return [...state, action.campus];

    case REMOVE_CAMPUS:
      return state.filter(campus => campus.id != action.campus.id)

    case UPDATE_CAMPUS_ARRAY:
      return state.filter(campus => campus.id != action.campus.id).concat(action.campus)

    default:
      return state
  }
}
