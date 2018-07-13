import React, { Component } from 'react';
import LobbyButton from './LobbyButton';

class LobbyButtonsList extends Component {
    createList(){
        let buttonsArray = this.props.lobbyArray.map(element => 
            <li key={element.socketid}><LobbyButton id={element.socketid} name={element.name} handle={this.props.handle}/></li>
        );
        return (
            <ul>{buttonsArray}</ul>
        );
    }
    render (){
        return (
            <div>
                {this.createList()}
            </div>
        );
    }
}

export default LobbyButtonsList;