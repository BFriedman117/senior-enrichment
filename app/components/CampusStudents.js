import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';




function CampusStudents (props) {

  const { studentCampus } = props;

  if ( studentCampus ){
    return (
      <div className='campus-students'>
        <hr></hr>
        <h4>Students</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {
              studentCampus.map(student => (
                <tr key={student.id}>
                  <td>
                    <NavLink to={`/students/${student.id}`}>
                      {student.name}
                    </NavLink>
                  </td>
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
    studentCampus: state.studentCampus
  }
}

const CampusStudentsContainer = connect(mapStateToProps)(CampusStudents);
export default withRouter(CampusStudentsContainer)
