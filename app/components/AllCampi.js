import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'


function AllCampi (props) {

    const { campi } = props;

    return (
      <div className='campi'>
        <table>
          <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {
            campi.map(campus => (
              <tr key={campus.id}>
                <td>
                  <img src={campus.imageUrl} />
                </td>
                <td>
                  <NavLink to={`/campi/${campus.id}`}>
                    {campus.name}
                  </NavLink>
                </td>
                <td>{campus.description}</td>
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
    campi: state.campi
  }
}

const AllCampiContainer = connect(mapStateToProps)(AllCampi);
export default withRouter(AllCampiContainer)
