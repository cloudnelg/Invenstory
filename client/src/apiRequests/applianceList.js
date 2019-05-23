import React from 'react';
import axios from 'axios';

var styles = {
  center: {
    textAlign: 'center',
  },
  border: {
    border: 'groove 10px',
  },
  image: {
    width: '50px',
    height: '50px',
    marginLeft: '200px',
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

  handleClick(applianceId) {
    axios.delete("/api/appliances/" + applianceId).then((response) => {
    }).then((result) => {
      alert("Item deleted refresh to remove")
    });
  }

  render() {
    return (<div style={styles.center}>

      {this.state.appliances.map(appliances =>
        <p style={styles.border}>
          {appliances.appliance_name}<br />
          Price: {appliances.price}<br />
          Comment: {appliances.comment}<br />
          <img style={styles.image} src={appliances.imgURL}></img><br />
          <button onClick={() => { this.handleClick(appliances._id) }} className="delete-btn">Delete</button>
          
          
        </p>)}



    </div>);
  }
}


