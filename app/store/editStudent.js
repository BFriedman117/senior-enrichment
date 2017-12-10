import store from './index';
import axios from 'axios'

const CHANGE_STUDENT_INFO = 'CHANGE_STUDENT_INFO';
const SAVE_CHANGES = 'SAVE_CHANGES'

const initialStudent = {
  firstName: '',
  lastName: '',
  email: '',
  gpa: '',
  campusId: ''
}

export const changeStudentInfo = function(student){

  return {
    type: CHANGE_STUDENT_INFO,
    student
  }
}

export const saveChanges = function(student){
  return {
    type: SAVE_CHANGES,
    student
  }
}

export function saveStudentInfo (student, history){

  return function thunk(dispatch){
    return axios.put('/api/students', student)
    .then(res => res.data)
    .then(editedStudent => {
      dispatch(saveChanges(editedStudent))
      history.push(`/students/${editedStudent.id}`)
    })
  }

}

export default function reducer(state=initialStudent, action){

  switch(action.type){
    case CHANGE_STUDENT_INFO:
      return Object.assign({}, state, action.student);

    case SAVE_CHANGES:
      const updatedStudent = Object.assign({}, state, action.student);
      return updatedStudent

    default:
      return state
  }
}
