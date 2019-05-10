import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';

var styles = {
  moda: {
  background: "url('http://4.bp.blogspot.com/-s1j9uEPgzAc/UFH3hpP95jI/AAAAAAAACHQ/kS_EsSywhio/s1600/Seamless+blue+black+marble+cloud+texture.jpg')",
  backgroundSize: '50%',
  borderRadius: '10px',
  },
  upload: {
    marginLeft: '25%',
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
    // debugger;
    // console.log(new Blob(this.state.file[0]));
    console.log(this.state.file);
    formData.append('image', this.state.file[0]);
    axios.post(`/image-upload-furniture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      alert('Photo Uploaded!')
    }).catch(error => {
      alert('Photo Failed To Upload...')
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});

  }

  render () {
    return (
    <div className='container aws' style={styles.moda}>
      <form style={styles.upload} onSubmit={this.submitFile}>
        <input  label='upload file' type='file' onChange={this.handleFileUpload} />
        <button  type='submit' onClick={this.submitFile}>Send</button>
      </form>
      </div>
    );
  }
}

export default Radium(FileUpload);