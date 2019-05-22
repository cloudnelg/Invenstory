import React from 'react';
import Radium from 'radium';
import axios from 'axios';

var styles = {
  button: {
    width: '100px',
    height: '100px'
  }
}

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
        <button onClick={this.logout} style={styles.button}>
          Logout
            </button>
      </div>

    )
  }
}

export default Radium(Logout);