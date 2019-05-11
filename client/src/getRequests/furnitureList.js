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

export default class FurnitureList extends React.Component {
  state = {
    furniture: []
  };
  componentDidMount() {
    axios.get(`/api/furniture`)
      .then(res => {
        const furniture = res.data;
        this.setState({ furniture });
      });
  }
  render() {
    return (<div style={styles.center}>
      {this.state.furniture.map(furniture =>
        <p style={styles.border}>
          Furniture Name: {furniture.furniture_name}<br />
          Price: {furniture.price}<br />
          Comment: {furniture.comment}
        </p>)}
    </div>);
  }
}