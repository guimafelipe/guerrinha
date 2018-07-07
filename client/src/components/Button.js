import React, { Component } from 'react';

class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: props.name,
            handle: props.handle,
        }
    }

    render (){
        return (
            <div>
                <button onClick={this.state.handle}>{this.state.name}</button>
            </div>
        );
    }
}

export default Button;