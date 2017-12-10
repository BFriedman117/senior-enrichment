import React, { Component } from 'react';
import store, { fetchCampi, fetchStudents } from '../store';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Navbar from './Navbar'
import AllCampi from './AllCampi'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'


export default class Root extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    const campusThunk = fetchCampi();
    const studentThunk = fetchStudents();
    store.dispatch(studentThunk);
    store.dispatch(campusThunk);
  }



  render() {
    return (
      <div>
        <h1>Interplanetary Campus Manager</h1>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/campi" component={AllCampi} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/:id" component={SingleStudent} />
            <Route exact path="/students/:id/edit" component={EditStudent} />
            <Route exact path="/campi/:id" component={SingleCampus} />
            <Route exact path="/add-student" component={AddNewStudent} />
            <Redirect to="/campi" />
          </Switch>
        </div>
      </div>
    )
  }
}
