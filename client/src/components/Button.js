import React, { Component } from 'react';

class Button extends Component {
    render (){
        return (
            <div>
                <button onClick={this.props.handle}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;