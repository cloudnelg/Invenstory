import React from 'react';
import Radium from 'radium';
import ModEnt from './Modal/Entertainment/entertainmentModal';
import './items.css'

var styles = {
  base: {
    background: 'black',
    border: 0,
    borderRadius: 2,
    color: 'white',
    padding: '1.2em',
    marginLeft: '25%',
    cursor: 'pointer',
  },

  list: {
    marginLeft: '15%',
  }

};

class Ent extends React.Component {
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
          <button onClick={this.toggleHidden.bind(this)} style={styles.base}>
            Entertainment
          </button>

          {!this.state.isHidden && <List />}
        </div>  
      )
    }
  }
  
  
  const List = () => (
  <div className='container' style={styles.list}>
  
        <div>
          <ModEnt />
        <p>Hello</p>
        </div>
    </div>
  )
  

  export default Radium(Ent); 