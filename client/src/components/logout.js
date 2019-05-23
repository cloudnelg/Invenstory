import React from 'react';
import Radium from 'radium';
import axios from 'axios';





class Logout extends React.Component {
  logout() {
    console.log('Checking In')
    axios.get('/users/logout')
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <button className='logOut' onClick={this.logout}>
          Logout
            </button>
      </div>

    )
  }
}

export default Radium(Logout);