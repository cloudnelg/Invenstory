import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';

var styles = {
  moda: {
  background: "url('https://www.thepaintstoreonline.com/wp-content/uploads/2015/07/sanderson_dandelion_dopwda101_red.jpg')",
  backgroundSize: '150%',
  borderRadius: '10px',
  }
};
 

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/image-upload`, {image: this.state.file[0] }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
    <div className='container aws' style={styles.moda}>
      <form  onSubmit={this.submitFile}>
        <input  label='upload file' type='file' onChange={this.handleFileUpload} />
        <button  type='submit'>Send</button>
      </form>
      </div>
    );
  }
}

export default Radium(FileUpload);