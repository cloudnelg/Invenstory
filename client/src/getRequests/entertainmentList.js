import React from 'react';
import axios from 'axios';
import Radium from 'radium';

var styles = {
    center: {
        textAlign: 'center',
    },
    border: {
        border: 'solid',
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
    render() {
        return (<div style={styles.center}>
            {this.state.entertainment.map(entertainment =>
                <p style={styles.border}>
                    Entertainment Name: {entertainment.entertainment_name}<br />
                    Price: {entertainment.price}<br />
                    Comment: {entertainment.comment}
                </p>)}
        </div>);
    }
}