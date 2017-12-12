import store from './index';
import axios from 'axios'
import { updateCampusArray } from './campi'

const CHANGE_CAMPUS_INFO = 'CHANGE_CAMPUS_INFO';
const SAVE_CHANGES = 'SAVE_CHANGES'

const initialCampus = {
  name: '',
  description: '',
  imageUrl: ''
}

export const changeCampusInfo = function(campus){

  return {
    type: CHANGE_CAMPUS_INFO,
    campus
  }
}

export const saveCampusChanges = function(campus){
  return {
    type: SAVE_CHANGES,
    campus
  }
}

export function saveCampusInfo (campus, history){

  return function thunk(dispatch){
    return axios.put('/api/campus', campus)
    .then(res => res.data)
    .then(editedCampus => {
      dispatch(saveCampusChanges(editedCampus))
      dispatch(updateCampusArray(editedCampus))
      history.push(`/campi/${editedCampus.id}`)
    })
  }

}

export default function reducer(state=initialCampus, action){

  switch(action.type){
    case CHANGE_CAMPUS_INFO:
      return Object.assign({}, state, action.campus);

    case SAVE_CHANGES:
      const updatedCampus = Object.assign({}, state, action.campus);
      return updatedCampus

    default:
      return state
  }
}
