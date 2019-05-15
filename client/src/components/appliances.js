import React from 'react';
import Radium from 'radium';
import Mod from './Modal/Appliances/appliancesModal';
import './items.css'
import ApplianceList from "../getRequests/applianceList";

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
    paddingTop: '1%',
    marginLeft: '25%',
    marginRight: '25%',
    color: 'white',
    background: 'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    boxShadow: '20px 20px rgba(0,0,0,.25)',
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
  <div className='container appList' style={styles.list}>
        <div>
          <Mod />
        <ApplianceList />
        </div>
    </div>
  )
  

  export default Radium(Appliance);