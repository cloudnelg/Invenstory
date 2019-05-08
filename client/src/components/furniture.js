import React from 'react';
import Radium from 'radium';
import Mod from './Modal/modal';

var styles = {
  base: {
    background: 'black',
    border: 0,
    borderRadius: 2,
    color: 'white',
    padding: '1.1em',
    cursor: 'pointer',
    marginLeft: '25%',
    marginRight: '68.5%',
  },
  list: {
    marginLeft: '15%',
  }
};



class Furn extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    hi () {
      alert('hi')
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          <p onClick={this.toggleHidden.bind(this)} style={styles.base} >
            Furniture
          </p>

          {!this.state.isHidden && <List />}
        </div>
        
      )
    }
  }
  
const List = () => (
  <div className='container' style={styles.list}>
    <Mod />
    <p>Sofa</p>
    <p>Bed</p>
    <p>Chair</p>
  </div>
  )
  

export default Radium(Furn);