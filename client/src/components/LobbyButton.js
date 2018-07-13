import React, { Component } from 'react';

class LobbyButton extends Component {
    render (){
        return (
            <div>
                <button onClick={() => {this.props.handle(this.props.id)}}>{this.props.name}</button>
            </div>
        );
    }
}

export default LobbyButton;