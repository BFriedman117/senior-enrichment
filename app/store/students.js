import axios from 'axios';
// import store from './index'

// import socket from 'socket';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT_ARRAY = 'UPDATE_STUDENT_ARRAY';


export const getStudents = function(students){
  return {
    type: GET_STUDENTS,
    students
  }
}

export const addStudent = function(student){

  return {
    type: ADD_STUDENT,
    student
  }
}

export const updateStudent = function(student){

  return {
    type: UPDATE_STUDENT,
    student
  }
}

export const removeStudent = function(student){

  return {
    type: REMOVE_STUDENT,
    student
  }
}

export const updateStudentArray = function(student){

  return {
    type: UPDATE_STUDENT_ARRAY,
    student
  }
}



export function fetchStudents (){

  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
      })
  }
}

export function sendNewStudent (student, history){

  return function thunk(dispatch){
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(addStudent(newStudent));
      history.push(`/students/${newStudent.id}`)
    })
  }
}

export function deleteStudent(student, history){

  return function thunk(dispatch){
    return axios.delete('/api/students/' + student.id, student)
    .then(res => res.data)
    .then(data => {
      history.push('/students')
      dispatch(removeStudent(student))
    })
  }
}





export default function reducer (state = [], action){

  switch (action.type){

    case GET_STUDENTS:
         return action.students;

    case ADD_STUDENT:
      return [...state, action.student];

    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.student.id);

    case UPDATE_STUDENT_ARRAY:
      return state.filter(student => student.id !== action.student.id).concat(action.student)

    default:
      return state
  }
}
