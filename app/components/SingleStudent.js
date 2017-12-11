import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import store, { deleteStudent } from '../store';



function SingleStudent (props) {

    const { students, campi, handleDelete } = props;
    const id = Number(props.match.params.id)

    if (students.length && campi.length){

      const currentStudent = students.find(student => student.id === id)
      const studentCampus = campi.find(campus => campus.id === currentStudent.campusId)

      return (
        <div className='single-student'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>GPA</th>
                <th>Campus</th>
              </tr>
              <tr key={currentStudent.id}>
                <td>{currentStudent.name}</td>
                <td>{currentStudent.email}</td>
                <td>{currentStudent.gpa}</td>
                <td>
                  <NavLink to={`/campi/${studentCampus.id}`}>
                    {studentCampus.name}
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/students/${currentStudent.id}/edit`}>
                    <button>Edit</button>
                  </NavLink>
                </td>
                <td>
                  <button onClick={handleDelete} id={currentStudent.id} name={currentStudent.name}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
}

const mapStateToProps = function(state){
  return {
    students: state.students,
    campi: state.campi
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  const id = {
    id: Number(ownProps.match.params.id)
  }

  return {
    handleDelete: function(evt){
      evt.preventDefault()
      const history = ownProps.history
      const check = confirm(`Delete ${evt.target.name}?`)
      if (check){
        dispatch(deleteStudent(id, history))
      }
    }
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
export default withRouter(SingleStudentContainer)
