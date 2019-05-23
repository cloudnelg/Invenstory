import React from 'react';
import axios from 'axios';

var styles = {
    center: {
        textAlign: 'center',
    },
    border: {
        border: 'groove 10px',
    },
    image: {
        width: '50px',
        height: '50px',
        marginLeft: '200px',
      }
}

export default class EntertainmentList extends React.Component {
    state = {
        entertainment: []
    };
    
    componentDidMount() {
        axios.get(`/api/entertainment`)
            .then(res => {
                const entertainment = res.data;
                this.setState({ entertainment });
            });
    }

    

    handleClick(entertainmentId) {
        axios.delete("/api/entertainment/" + entertainmentId).then((response) => {
            
        }).then((result) => {
            alert("Item deleted refresh to remove")
            console.log(this.state.entertainment)
        });
    }
    render() {
        return (<div style={styles.center}>
            {this.state.entertainment.map(entertainment =>
                <p style={styles.border}>
                    Entertainment Name: {entertainment.entertainment_name}<br />
                    Price: {entertainment.price}<br />
                    Comment: {entertainment.comment}<br />
                    <img style={styles.image} src={entertainment.imgURL}></img><br />
                    <button onClick={() => { this.handleClick(entertainment._id) }} className="delete-btn">Delete</button>
                </p>)}
        </div>);
    }
}