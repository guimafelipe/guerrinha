import React, { Component } from 'react';

class Lifes extends Component {
    constructor (props) {
        super();
        this.state = {
            qnt: props.qnt,
        }
    }

    render (){
        return (
            <div>
                <span> Lifes: {this.state.qnt}</span>
            </div>
        );
    }
}

export default Lifes;