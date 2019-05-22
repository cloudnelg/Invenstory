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
    marginLeft: '350px'
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

  handleClick(furnitureId) {
    axios.delete("/api/furniture/" + furnitureId).then((response) => {
    }).then((result) => {
      alert("Item deleted refresh to remove")
    });
  }
  render() {
    return (<div style={styles.center}>
      {this.state.furniture.map(furniture =>
        <p style={styles.border}>
          Furniture Name: {furniture.furniture_name}<br />
          Price: {furniture.price}<br />
          Comment: {furniture.comment}<br />
          <img style={styles.image} src={furniture.imgURL}></img><br />
          <button onClick={() => { this.handleClick(furniture._id) }} className="delete-btn">Delete</button>
        </p>)}
    </div>);
  }
}