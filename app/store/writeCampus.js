import store from './index';

const WRITE_CAMPUS_INFO = 'WRITE_CAMPUS_INFO'

const initialCampus = {
  name: '',
  description: '',
  imageUrl: ''
}

export const writeCampusInfo = function(newCampus){

  return {
    type: WRITE_CAMPUS_INFO,
    newCampus
  }
}



export default function reducer(state = initialCampus, action){

  switch(action.type){

    case WRITE_CAMPUS_INFO:
      return Object.assign({}, state, action.newCampus)

    default:
      return state

  }
}
