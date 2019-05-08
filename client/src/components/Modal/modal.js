import React from "react";
import Radium from 'radium';
import './modal.css';
import FileUpload from './awsUpload';


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
    background: "url('https://img.freepik.com/free-photo/white-marble-texture-with-natural-pattern-background-design-art-work_24076-186.jpg?size=626&ext=jpg')",
    backgroundSize: '75%',
    borderRadius: '10px',
    marginRight: '25%',
    marginLeft: '25%',
    textAlign: 'center',
    color: 'Black',
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
  }


}

//Radium End


class Mod extends React.Component {
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
          <Modal  show={this.state.show} handleClose={this.hideModal} >
          <div style={styles.img}>
          <FileUpload />
          </div>

            <div style={styles.moda}>
              <p>Appliance Name</p>
              <input type="text" name="name" placeholder='Appliance Name' />
            </div>
            
            <div style={styles.moda}>
              <p>Price</p>
              <input type="text" name="name" placeholder='Price' />
            </div>

            <div style={styles.moda}>
              <p>Comment</p>
              <textarea type="text" name="name" placeholder='Comment' style={styles.comment}/>
              
            </div>
            
            <input style={styles.sub} type="submit" value="Submit" onClick={this.submit}/>
            
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
        <section className='modal-main'>
          {children}
          <button style={styles.close} className='close' onClick={handleClose}>
            X
          </button>
        </section>
      </div>
    );
  };
  export default Radium(Mod);
  

 