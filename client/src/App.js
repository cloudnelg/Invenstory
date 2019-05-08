import React, { Component } from 'react';
import Appliance from './components/appliances';
import Radium from 'radium';
import Furn from './components/furniture'
//import Mod from './components/Modal/modal';

var styles = {
  background: {
    marginTop: '10%'
    
  }
};


class App extends Component {
    render() {
        return (
          <div className='container' style={styles.background}>
            <Appliance />
            <Furn />
            
          </div>
        );
      }
}

export default App;
