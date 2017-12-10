import React from 'react';
import { connect } from 'react-redux';
import store, { changeStudentInfo, saveStudentInfo, fetchStudents } from '../store';

function EditStudent (props) {

    const { students, handleChange, handleSubmit, editStudent } = props;

    if (students.length){

      const id = Number(props.match.params.id)
      const currentStudent = students.find(student => student.id === id)
      const studentBeingEdited = Object.assign({}, currentStudent);
      // console.log(studentBeingEdited)
      // store.dispatch(changeStudentInfo(studentBeingEdited))

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <input value={editStudent.firstName} onChange={handleChange} name="firstName" placeholder="First Name" />
            <input value={editStudent.lastName} onChange={handleChange} name="lastName" placeholder="Last Name" />
            <input value={editStudent.email} onChange={handleChange} name="email" placeholder="eMail Address" />
            <input value={editStudent.gpa} onChange={handleChange} name="gpa" placeholder="Current GPA" />
            <input value={editStudent.campusId} onChange={handleChange} name="campusId" placeholder="Campus ID" />
          </div>
          <div>
            <button type="submit">Save Changes</button>
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
    students: state.students
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
      const studentThunk = fetchStudents();
      dispatch(saveStudentInfo(studentBeingEdited, history))
      dispatch(studentThunk)
    }
  }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)

export default EditStudentContainer
