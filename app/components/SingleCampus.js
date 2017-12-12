import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import CampusStudents from './CampusStudents'
import store, { deleteCampus } from '../store';


function SingleCampus (props) {

    const { campi, handleDelete } = props;
    const id = Number(props.match.params.id)
    const currentCampus = campi.find(campus => campus.id === id)

    if (!currentCampus){
      return (
        <div>
          <h1>404!</h1>
          <h2>Campus Not Found</h2>
        </div>
      )
    }

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
                  <td>
                    <NavLink to={`/campi/${currentCampus.id}/edit`}>
                      <button>Edit</button>
                    </NavLink>
                    </td>
                    <td>
                      <button onClick={handleDelete} id={currentCampus.id} name={currentCampus.name}>Delete</button>
                    </td>
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
        dispatch(deleteCampus(id, history))
      }
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default withRouter(SingleCampusContainer)
