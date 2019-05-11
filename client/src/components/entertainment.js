import React from 'react';
import Radium from 'radium';
import ModEnt from './Modal/Entertainment/entertainmentModal';
import './items.css'
import EntertainmentList from '../getRequests/entertainmentList';


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
    marginLeft: '25%',
    marginRight: '25%',
    background: 'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: 'white',
    boxShadow: '20px 20px rgba(0,0,0,.25)',
  },


};

class Ent extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
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
  <div className='container entList' style={styles.list}>

    <div>
      <ModEnt />
      <EntertainmentList />
    </div>
  </div>
)


export default Radium(Ent); 