import store from './index';

const WRITE_STUDENT_INFO = 'WRITE_STUDENT_INFO'

const initialStudent = {
  firstName: '',
  lastName: '',
  email: '',
  gpa: '',
  campusId: ''
}

export const writeStudentInfo = function(newStudent){

  return {
    type: WRITE_STUDENT_INFO,
    newStudent
  }
}



export default function reducer(state = initialStudent, action){

  switch(action.type){

    case WRITE_STUDENT_INFO:
      return Object.assign({}, action.newStudent)

    default:
      return state

  }
}
