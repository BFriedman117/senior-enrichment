import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'



function AllStudents (props) {

    const { students } = props;

    return (
      <div className='students'>
        <table>
          <tbody>
            <tr>
              <th>Students</th>
            </tr>
            {
              students.map(student => (
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

}

const mapStateToProps = function(state){
  return {
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    handleClick: function(){
      alert()
    }
  }
}

const AllStudentsContainer = connect(mapStateToProps)(AllStudents);
export default withRouter(AllStudentsContainer)
