import axios from 'axios';
import store from './index'

// import socket from 'socket';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const CHANGE_STUDENT = 'CHANGE_STUDENT';


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

export const changeStudent = function(student){

  return {
    type: CHANGE_STUDENT,
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

export function sendNewStudent (student){

  return function thunk(dispatch){
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(addStudent(newStudent));
    })
  }
}

export function deleteStudent(student, history){

  return function thunk(dispatch){
    return axios.delete('/api/students/' + student.id, student)
    .then(res => res.data)
    .then(data => {
      dispatch(removeStudent(student))
      history.push('/students')
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
      return state.filter(student => student.id !== action.student.id)

    default:
      return state
  }
}
