import React from "react";
import Radium from 'radium';
import '../modal.css';
import FileUpload from './awsUploadFurniture';
const superagent = require('superagent');


//Radium
var styles = {
  close: {
    position: 'fixed',
    background: 'linear-gradient(90deg, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)',
    backgroundSize: '400%',
    borderRadius: '10px',
    border: "1px",
    borderStyle: "solid",
    cursor: "pointer",
    fontSize: "25px",
    fontWeight: 100,
    bottom: '101%',
    left: '96%',
    padding: '5px 10px 5px 10px',
  },
  plus: {
    background: 'linear-gradient(90deg, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)',
    backgroundSize: '400%',
    borderRadius: '10px',
    textAlign: 'center',
    border: "1px",
    borderStyle: "solid",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 200,
    marginLeft: '40%',
    marginRight: '40%',
    
  },
  moda: {
    background: "url('https://image.freepik.com/free-photo/light-brown-wooden-textured-background_53876-75016.jpg')",
    backgroundSize: '50%',
    borderRadius: '10px',
    marginRight: '25%',
    marginLeft: '25%',
    textAlign: 'center',
    color: 'Black',
    fontWeight: 900,
    fontSize: '19px',
  },
  comment: {
    width: '400px',
    paddingBottom: '5%',
  },
  sub: {
    marginTop: '1%',
    marginLeft: '47%',
  },
  img: {
    marginTop: '-7%',
    marginRight: '20%',
  },
  back: {
    background: "url('http://tukpencarialhaq.com/wp-content/uploads/2018/06/chair-blue.jpg')",
    backgroundSize: '100%',
  }
}
//Radium End


class ModFurn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture_name: '',
      price: '',
      comment: ''
    };
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleMessageInput2 = this.handleMessageInput2.bind(this);
    this.handleMessageInput3 = this.handleMessageInput3.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }
  handleMessageInput(e) {
    this.setState({ furniture_name: e.target.value });
  }

  handleMessageInput2(e) {
    this.setState({ price: e.target.value });
  }

  handleMessageInput3(e) {
    this.setState({ comment: e.target.value });
  }

  onSuccessfulUpload = (imgUrl) => {
    this.setState({ imgUrl })
  }

  handleSubmitMessage(event) {
    event.preventDefault();

    if (this.state.furniture_name === ''){
      return alert("Furniture Name And Price Both Required To Submit!");
    }if (this.state.price === '') {
      return alert("Furniture Name And Price Both Required To Submit!");
    }

    const data = {
      furniture_name: this.state.furniture_name,
      price: this.state.price,
      comment: this.state.comment,
      imgURL: this.state.imgUrl
    };
    console.log(this.state)

    superagent
      .post('/api/furniture')
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          alert('Error Furniture Not Added!');
        } else {
          alert('New Furniture Has Been Added! Refresh Page To Reveal New Furniture Item!');
        }
      });
  }

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  submit = () => {
    if (this.state.furniture_name === '') {
      this.setState({ show: true });
    }if(this.state.price === ''){
      this.setState({ show: true });
    }else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div style={styles.img}>
            <FileUpload onSuccessfulUpload={this.onSuccessfulUpload}/>
          </div>
          <form onSubmit={this.handleSubmitMessage}>
            <div style={styles.moda}>
              <p>Furniture Name</p>
              <input placeholder='Furniture Name' onChange={this.handleMessageInput} value={this.state.appliance_name} />
            </div>

            <div style={styles.moda}>
              <p>Price</p>
              <input placeholder='Price' onChange={this.handleMessageInput2} value={this.state.price} />
            </div>

            <div style={styles.moda}>
              <p>Comment</p>
              <textarea placeholder='Comment' onChange={this.handleMessageInput3} value={this.state.comment} />

            </div>

            <input style={styles.sub} type="submit" value="Submit" onClick={this.submit} />
          </form>
        </Modal>
        <p className='plus' style={styles.plus} type='button' onClick={this.showModal}>+</p>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName + ' modal'}>
      <section className='modal-main' style={styles.back}>
        {children}
        <button style={styles.close} className='close' onClick={handleClose}>
          X
          </button>
      </section>
    </div>
  );
};
export default Radium(ModFurn);