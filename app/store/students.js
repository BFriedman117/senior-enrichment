import axios from 'axios';
import store from './index'
// import socket from 'socket';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';



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

export const removeStudent = function(student){

  return {
    type: DELETE_STUDENT,
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
      console.log(history)
      history.push('/students')
    })
  }
}

function removeFromArray(id, array){
  let newArray = [];

  for (let i = 0; i < array.length; i++){
    if (array[i].id != id){
      newArray.push(array[i])
    }
  }
  return newArray
}



export default function reducer (state = [], action){

  switch (action.type){

    case GET_STUDENTS:
         return action.students;

    case ADD_STUDENT:
      return [...state, action.student];

    case DELETE_STUDENT:
      const newArray = removeFromArray(action.student.id, state);
      return newArray

    default:
      return state
  }
}
