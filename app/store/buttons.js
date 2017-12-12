// import store from './index'

const buttonState = {
  delete: true
}

const TOGGLE_DELETE = 'TOGGLE_DELETE';

export const toggleDelete = function(){

  return {
    type: TOGGLE_DELETE
  }
}

export default function reducer (state = buttonState, action){

  switch (action.type){

    case TOGGLE_DELETE:
      return Object.assign({}, state, {delete: false})

    default:
      return state
  }
}
