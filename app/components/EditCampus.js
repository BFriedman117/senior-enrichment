import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import store, { changeCampusInfo, saveCampusInfo } from '../store';

function EditCampus (props) {

    const { campi, handleChange, handleSubmit, editCampus } = props;

    if (campi.length){

      const id = Number(props.match.params.id)
      const currentCampus = campi.find(campus => campus.id === id)
      const campusBeingEdited = Object.assign({}, currentCampus);

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <input value={editCampus.name} onChange={handleChange} name="name" placeholder="Name" />
            <input value={editCampus.description} onChange={handleChange} name="description" placeholder="Description" />
            <input value={editCampus.imageUrl} onChange={handleChange} name="imageUrl" placeholder="eMail Address" />
          </div>
          <div>
            <button type="submit">Save Changes</button>
              <NavLink to={`/campi/${editCampus.id}`}>
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
    editCampus: state.editCampus,
    campi: state.campi
  }
}

const mapDispatchToProps = function(dispatch, ownProps){

  const campi = store.getState().campi
  const editCampus = store.getState().editCampus
  const id = Number(ownProps.match.params.id)
  const currentCampus = campi.find(campus => campus.id === id)
  const campusBeingEdited = Object.assign({}, currentCampus);
  dispatch(changeCampusInfo(campusBeingEdited))

  return {

    handleChange: function(evt){
      campusBeingEdited[evt.target.name] = evt.target.value;
      dispatch(changeCampusInfo(campusBeingEdited))
    },

    handleSubmit: function(evt){
      evt.preventDefault();
      const history = ownProps.history
      dispatch(saveCampusInfo(campusBeingEdited, history))
    }
  }
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)

export default withRouter(EditCampusContainer)
