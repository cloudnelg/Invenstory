import React from 'react';
import Radium from 'radium';
import ModFurn from './Modal/Furniture/furnitureModal';

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
    color: 'white',
    background: 'black',
  }
};



class Furn extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
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
    <ModFurn />

    <p>Sofa</p>
    <p>Bed</p>
    <p>Chair</p>
  </div>
  )
  

export default Radium(Furn);