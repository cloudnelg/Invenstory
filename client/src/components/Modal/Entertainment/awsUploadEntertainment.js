import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';

var styles = {
  moda: {
  background: "url('https://wallpaperaccess.com/full/717368.jpg')",
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
 

class FileUploadEnt extends Component {
  constructor () {
    super();
    this.state = {
      files: []
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    // debugger;
    // console.log(new Blob(this.state.file[0]));
    console.log(this.state.file);
    formData.append('image', this.state.files[0]);
    axios.post(`/image-upload-entertainment`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      alert('Photo Uploaded!')
      if (response.data && response.data.imageUrl) {
        this.props.onSuccessfulUpload(response.data.imageUrl)
        console.log(response.data)
      }
    }).catch(error => {
      alert('Photo Failed To Upload...')
    });
  }

  fileSelectedHandler = (e) => {
    this.setState({ files: e.target.files })
  }

  render () {
    return (
    <div className='container aws' style={styles.moda}>
      <form style={styles.upload} onSubmit={this.submitFile}>
        <input  label='upload file' type='file' onChange={this.fileSelectedHandler} />
        <button  type='submit' onClick={this.submitFile}>Send</button>
      </form>
      </div>
    );
  }
}

export default Radium(FileUploadEnt); 