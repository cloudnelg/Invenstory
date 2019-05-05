import React from 'react';
import Radium from 'radium';

var styles = {
  base: {
    background: 'black',
    border: 0,
    borderRadius: 2,
    color: 'white',
    padding: '1.5em'
  }
};



class Appliance extends React.Component {
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
            Appliances
          </button>

          {!this.state.isHidden && <List />}
        </div>  
      )
    }
  }
  
  
  const List = () => (
  <div className='container'>
  
        <div>
        <p>Hello</p>

        </div>
    </div>
  )
  

  export default Radium(Appliance);