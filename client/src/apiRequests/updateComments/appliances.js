import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      comment: ""
    }
  }

  componentDidMount() {
    axios.get('/api/appliances/')
        .then(response => {
            this.setState({ comment: response.data.comment});
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  

  onChangeComment(e) {
    this.setState({ comment: e.target.value});
  }

  
  onSubmit(e) {
    e.preventDefault();
    const comm = {
      comment: this.state.comment
    };
    axios.post('/api/appliances', comm)
      .then(res => console.log(res.data));

    
  }
  
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  submit = () => {
    if (this.state.appliance_name === '') {
      this.setState({ show: true });
    } if (this.state.price === '') {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <main>
      <Modal closeTimeoutMS={200} show={this.state.show} handleClose={this.hideModal} >
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Comment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Comment:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.comment}
              onChange={this.onChangeComment}
            />
          </div>

          <div className="form-group">
            <input type="submit"
              value="Update Comment"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
      </Modal>
      <p className='plus'  type='button' onClick={this.showModal}>+</p>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName + ' modal'}>
      <section className='modal-main animated bounce delay-2s' >
        {children}
        <button  className='close' onClick={handleClose}>
          X
      </button>
      </section>
    </div>
  );
};

