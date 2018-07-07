import React, { Component } from 'react';

class Lifes extends Component {
    render (){
        return (
            <div>
                <span> Lifes: {this.props.qnt}</span>
            </div>
        );
    }
}

export default Lifes;