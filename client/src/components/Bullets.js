import React, { Component } from 'react';

class Bullets extends Component {
    render (){
        return (
            <div>
                <span> Bullets: {this.props.qnt}</span>
            </div>
        );
    }
}

export default Bullets;