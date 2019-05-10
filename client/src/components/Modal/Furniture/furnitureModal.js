import React from "react";
import Radium from 'radium';
import '../modal.css';
import FileUpload from './awsUploadFurniture';
const superagent = require('superagent');


//Radium
var styles = {
  close: {
    position: 'fixed',
    background: 'linear-gradient(90deg, white, #ff3333, white, #ff3333)',
    backgroundSize: '400%',
    borderRadius: '10px',
    border: "1px",
    borderStyle: "solid",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 200,
    bottom: '101%',
    left: '96%',
    padding: '5px 10px 5px 10px',
  },
  plus: {
    background: 'linear-gradient(90deg, white, #ff3333, white, #ff3333)',
    backgroundSize: '400%',
    borderRadius: '10px',
    textAlign: 'center',
    border: "1px",
    borderStyle: "solid",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 200,
    marginLeft: '75%',
    marginRight: '275px',

  },
  moda: {
    background: "url('http://4.bp.blogspot.com/-s1j9uEPgzAc/UFH3hpP95jI/AAAAAAAACHQ/kS_EsSywhio/s1600/Seamless+blue+black+marble+cloud+texture.jpg')",
    backgroundSize: '50%',
    borderRadius: '10px',
    marginRight: '25%',
    marginLeft: '25%',
    textAlign: 'center',
    color: 'snow',
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
    background: "url('https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
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

  handleSubmitMessage(event) {
    event.preventDefault();

    const data = {
      furniture_name: this.state.furniture_name,
      price: this.state.price,
      comment: this.state.comment
    };
    console.log(this.state)

    superagent
      .post('/api/furniture')
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          console.log('Error');
        } else {
          console.log('Success');
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
    this.setState({ show: false });
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div style={styles.img}>
            <FileUpload />
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