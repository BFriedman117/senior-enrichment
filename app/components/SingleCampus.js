import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CampusStudents from './CampusStudents'



function SingleCampus (props) {

    const { campi } = props;
    const id = Number(props.match.params.id)
    const currentCampus = campi.find(campus => campus.id === id)

    if (campi.length){
      return (
        <div className='single-campus'>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
                <tr key={currentCampus.id}>
                  <td>{currentCampus.name}</td>
                  <td>{currentCampus.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CampusStudents />
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
    campi: state.campi
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);
export default SingleCampusContainer
