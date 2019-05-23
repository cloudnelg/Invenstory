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
  },
  photo: {
    color: 'black'
  }

};


class FileUploadApp extends Component {
  constructor() {
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
    console.log(this.state.files[0]);
    formData.append('image', this.state.files[0]);
    axios.post(`/image-upload-appliance`, formData, {
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

  render() {
    return (
      <div className='container' style={styles.moda}>
        <form style={styles.upload} onSubmit={this.submitFile}>
          <input type="file" multiple onChange={this.fileSelectedHandler} style={styles.photo}/>
          <button type='submit' multiple onClick={this.submitFile}>Send</button>
        </form>
      </div>
    );
  }
}

export default Radium(FileUploadApp);