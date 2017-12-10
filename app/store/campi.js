import axios from 'axios';
// import socket from 'socket';

const GET_CAMPI = 'GET_CAMPI';
const ADD_CAMPUS = 'ADD_CAMPUS';

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

//Still need: Add Campus thunk creator upon writing POST route

export default function reducer (state=[], action){

  switch (action.type){

    case GET_CAMPI:
         return action.campi;

    case ADD_CAMPUS:
      return [...state, action.campus];

    default:
      return state
  }
}
