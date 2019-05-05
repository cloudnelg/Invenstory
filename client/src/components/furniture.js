import React from 'react';


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
          <p onClick={this.toggleHidden.bind(this)} >
            Furniture
          </p>

          {!this.state.isHidden && <List />}
        </div>
        
      )
    }
  }
  
const List = () => (
  <div className='container'>
    <p>Sofa</p>
    <p>Bed</p>
    <p>Chair</p>
    </div>
  )
  

export default Furn;