import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'



function CampusStudents (props) {

  const { campi, students } = props;
  const id = Number(props.match.params.id)
  const currentCampus = campi.find(campus => campus.id === id)
  const campusStudents = students.filter(student => student.campusId === currentCampus.id)

  if ( campi.length && students.length ){
    return (
      <div className='campus-students'>
        <hr></hr>
        <h4>Students</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>GPA</th>
            </tr>
            {
              campusStudents.map(student => (
                <tr key={student.id}>
                  <td>
                    <NavLink to={`/students/${student.id}`}>
                      {student.name}
                    </NavLink>
                  </td>
                  <td>{student.email}</td>
                  <td>{student.gpa}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div></div>
  }
}

const mapStateToProps = function(state){
  return {
    students: state.students,
    campi: state.campi
  }
}

const CampusStudentsContainer = connect(mapStateToProps)(CampusStudents);
export default withRouter(CampusStudentsContainer)
