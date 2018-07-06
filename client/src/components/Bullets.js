import React, { Component } from 'react';

class Bullets extends Component {
    constructor (props) {
        super();
        this.state = {
            qnt: props.qnt,
        }
    }

    render (){
        return (
            <div>
                <span> Bullets: {this.state.qnt}</span>
            </div>
        );
    }
}

export default Bullets;