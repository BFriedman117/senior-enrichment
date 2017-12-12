import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import store, { changeStudentInfo, saveStudentInfo, } from '../store';

function EditStudent (props) {


    const { students, handleChange, handleSubmit, editStudent, campi } = props;

    if (students.length && campi.length){

      const id = Number(props.match.params.id)
      const currentStudent = students.find(student => student.id === id)
      const studentBeingEdited = Object.assign({}, currentStudent);

      if (!currentStudent){
        return (
          <div>
            <h1>404!</h1>
            <h2>Student Not Found</h2>
          </div>
        )
      }

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <input value={editStudent.firstName} onChange={handleChange} name="firstName" placeholder="First Name" />
            <input value={editStudent.lastName} onChange={handleChange} name="lastName" placeholder="Last Name" />
            <input value={editStudent.email} onChange={handleChange} name="email" placeholder="eMail Address" />
            <input value={editStudent.gpa} onChange={handleChange} name="gpa" placeholder="Current GPA" />
              <select onChange={handleChange} name="campusId" value={editStudent.campusId}>
                {
                  campi.map(campus => (
                    <option value={campus.id} name="campusId" key={campus.id}>{campus.name}</option>
                  ))
                }
              </select>
          </div>
          <div>
            <button type="submit">Save Changes</button>
              <NavLink to={`/students/${editStudent.id}`}>
                <button>Back</button>
              </NavLink>
          </div>
        </form>
      )
    } else {
      return <div></div>
    }
  }

const mapStateToProps = function(state, ownProps){
  return {
    editStudent: state.editStudent,
    students: state.students,
    campi: state.campi
  }
}

const mapDispatchToProps = function(dispatch, ownProps){

  const students = store.getState().students
  const editStudent = store.getState().editStudent
  const id = Number(ownProps.match.params.id)
  const currentStudent = students.find(student => student.id === id)
  const studentBeingEdited = Object.assign({}, currentStudent);
  dispatch(changeStudentInfo(studentBeingEdited))

  return {

    handleChange: function(evt){
      studentBeingEdited[evt.target.name] = evt.target.value;
      dispatch(changeStudentInfo(studentBeingEdited))
    },

    handleSubmit: function(evt){
      evt.preventDefault();
      const history = ownProps.history
      dispatch(saveStudentInfo(studentBeingEdited, history))
    }

  }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)

export default withRouter(EditStudentContainer)
