import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'

function Navbar (props) {

  return (
    <div>
      <NavLink to='/campi'>
        <button>Campi</button>
      </NavLink>
      <NavLink to='/students'>
        <button>Students</button>
      </NavLink>
      <NavLink to='/add-student'>
        <button>Add Student</button>
      </NavLink>
      <NavLink to='/add-campus'>
        <button>Add Campus</button>
      </NavLink>
      <hr></hr>
    </div>
  )
}

const NavbarContainer = connect()(Navbar);

export default withRouter(Navbar)
