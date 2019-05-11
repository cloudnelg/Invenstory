import React from 'react';
import axios from 'axios';
import Radium from 'radium';

var styles = {
  center: {
    textAlign: 'center',
  },
  border: {
    border: 'solid',
  }
}

export default class ApplianceList extends React.Component {
  state = {
    appliances: []
  };
  componentDidMount() {
    axios.get(`/api/appliances`)
      .then(res => {
        const appliances = res.data;
        this.setState({ appliances });
      });
  }
  render() {
    return (<div style={styles.center}>

      {this.state.appliances.map(appliances =>

        <p style={styles.border}>
          {appliances.appliance_name}<br />
          Price: {appliances.price}<br />
          Comment: {appliances.comment}
        </p>)}


    </div>);
  }
}


