import axios from 'axios';

const STUDENT_CAMPUS = 'STUDENT_CAMPUS';

export const studentCampus = function(students){

  return {
    type: STUDENT_CAMPUS,
    students
  }
}

export function fetchStudentCampus (campus){

  return function thunk(dispatch){
    return axios.get('/api/student-campus/' + campus.id)
      .then(res => res.data)
      .then(students => {
        dispatch(studentCampus(students))
      })
  }
}

export default function reducer (state = [], action){

  switch (action.type){

    case STUDENT_CAMPUS:
      return action.students

    default:
      return state
  }

}
