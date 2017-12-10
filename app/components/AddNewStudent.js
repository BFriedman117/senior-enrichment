import React from 'react';
import { connect } from 'react-redux';
import store, { writeStudentInfo, sendNewStudent} from '../store';


function AddNewStudent(props) {

  const { handleSubmit, handleChange, newStudent } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={newStudent.firstName} onChange={handleChange} name="firstName" placeholder="First Name" />
        <input value={newStudent.lastName} onChange={handleChange} name="lastName" placeholder="Last Name" />
        <input value={newStudent.email} onChange={handleChange} name="email" placeholder="eMail Address" />
        <input value={newStudent.gpa} onChange={handleChange} name="gpa" placeholder="Current GPA" />
        <input value={newStudent.campusId} onChange={handleChange} name="campusId" placeholder="Campus ID" />
      </div>
      <div>
        <button type="submit">Add Student</button>
      </div>
    </form>
  )
}

const mapStateToProps = function(state){
  return {
    newStudent: state.newStudent
  }
}


const mapDispatchToProps = function(dispatch){

  const newStudent = store.getState().newStudent;

  const blankStudent = {
    firstName: '',
    lastName: '',
    email: '',
    gpa: '',
    campusId: ''
  }

  return {

    handleChange: function(evt){
      newStudent[evt.target.name] = evt.target.value;
      dispatch(writeStudentInfo(newStudent))
    },

    handleSubmit: function(evt){
      evt.preventDefault();

      dispatch(sendNewStudent(newStudent))
      dispatch(writeStudentInfo(blankStudent))
    }
  }
}

const AddNewStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent);

export default AddNewStudentContainer
