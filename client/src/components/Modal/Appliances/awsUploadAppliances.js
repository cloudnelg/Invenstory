import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';


var styles = {
  moda: {
  background: "url('https://wallpaperaccess.com/full/130053.jpg')",
  backgroundSize: '100%',
  borderRadius: '10px',
  marginLeft: '25%',
  marginTop: '10%',
  zIndex: -1,
  paddingTop: '5%',
  },
  upload: {
    marginLeft: '25%',
  }

};
 

class FileUploadApp extends Component {
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
    axios.post(`/image-upload-appliance`, formData, {
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
    <div className='container' style={styles.moda}>
      <form  style={styles.upload} onSubmit={this.submitFile}>
        <input  label='upload file' type='file' onChange={this.handleFileUpload} />
        <button  type='submit' onClick={this.submitFile}>Send</button>
      </form>
      </div>
    );
  }
}

export default Radium(FileUploadApp);