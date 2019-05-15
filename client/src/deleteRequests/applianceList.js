import React from 'react';
import axios from 'axios';

export default class ApplianceDelete extends React.Component {
    handleSubmit = event => {
      event.preventDefault();
  
      axios.delete(`/api/appliances/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">Delete</button>
            </form>
          </div>
        )
      }
}