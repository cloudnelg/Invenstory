import React from "react";
import Radium from 'radium';
import './modal.css';
import Images from './imageUploader';

var styles = {
  close: {
    position: 'fixed',
    background: 'linear-gradient(90deg, #0000cc, #6666ff, #b3b3ff, #0000cc)',
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
    background: 'linear-gradient(90deg, #0000cc, #6666ff, #b3b3ff, #0000cc)',
    backgroundSize: '400%',
    borderRadius: '10px',
    textAlign: 'center',
    border: "1px",
    borderStyle: "solid",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 200,
    marginRight: '1500px',
    
  },
  moda: {
    textAlign: 'center',
    color: 'white',
  },
  sub: {
    marginTop: '1%',
    marginLeft: '47%',
  },


}



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
          <Images />
          </div>
            <div style={styles.moda}>
              <p>Furniture Type</p>
              <input type="text" placeholder='Furniture' />
            </div>
            
            <div style={styles.moda}>
              <p>Price</p>
              <input type="text" name="name" placeholder='Price' />
              
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
  

 