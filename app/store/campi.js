import axios from 'axios';
// import socket from 'socket';

const GET_CAMPI = 'GET_CAMPI';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

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

export function sendNewCampus (campus){

  return function thunk(dispatch){
    return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(addCampus(newCampus));
    })
  }
}

export function deleteCampus(campus, history){
  console.log('delete ran: ', campus)
  return function thunk(dispatch){
    return axios.delete('/api/campus/' + campus.id, campus)
    .then(res => res.data)
    .then(data => {
      console.log('thunk data: ', data)
      dispatch(removeCampus(campus))
      history.push('/campi')
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

    default:
      return state
  }
}
