import React from 'react';
import { connect } from 'react-redux';
import store, { writeCampusInfo, sendNewCampus} from '../store';


function AddNewCampus(props) {

  const { handleSubmit, handleChange, newCampus } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={newCampus.name} onChange={handleChange} name="name" placeholder="Name" />
        <input value={newCampus.description} onChange={handleChange} name="description" placeholder="Description" />
        <input value={newCampus.imageUrl} onChange={handleChange} name="imageUrl" placeholder="Image" />

      </div>
      <div>
        <button type="submit">Add Campus</button>
      </div>
    </form>
  )
}

const mapStateToProps = function(state){
  return {
    newCampus: state.newCampus
  }
}


const mapDispatchToProps = function(dispatch){

  const newCampus = store.getState().newCampus;

  const blankCampus = {
    name: '',
    description: '',
    imageUrl: ''
  }

  return {

    handleChange: function(evt){
      newCampus[evt.target.name] = evt.target.value;
      dispatch(writeCampusInfo(newCampus))
    },

    handleSubmit: function(evt){
      evt.preventDefault();

      dispatch(sendNewCampus(newCampus))
      dispatch(writeCampusInfo(blankCampus))
    }
  }
}

const AddNewCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewCampus);

export default AddNewCampusContainer
