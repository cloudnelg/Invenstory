import React from 'react';
import Radium from 'radium';
import ModFurn from './Modal/Furniture/furnitureModal';
import FurnitureList from '../apiRequests/furnitureList';

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
    marginLeft: '25%',
    marginRight: '25%',
    background: 'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: 'white',
    boxShadow: '20px 20px rgba(0,0,0,.25)',
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
  <div className='container furnList' style={styles.list}>
    <ModFurn />
    <FurnitureList />
  </div>
  )
  

export default Radium(Furn);