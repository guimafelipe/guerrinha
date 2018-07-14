import React, { Component } from 'react';
import LobbyButtonsList from './LobbyButtonsList';
import Button from './Button';

class Lobby extends Component {
    constructor (){
        super();
        this.state = {
            lobbyArray: [] // a player is identified by his name and socket id
            //we use this to create a game
        }
        this.startMatchHandle = this.startMatchHandle.bind(this);
        this.enterQueueHandle = this.enterQueueHandle.bind(this);
        this.exitQueueHandle = this.exitQueueHandle.bind(this);
    }
    startMatchHandle(oponentid){
        this.socket.emit('startMatch', oponentid);
    }
    enterQueueHandle(){
        this.socket.emit('enterQueue', this.socket.name);
    }
    exitQueueHandle(){
        this.socket.emit('exitQueue');
    }
    updateSocket(skt){
        if(this.socket) return;
        this.socket = skt;
        this.socket.on('lobbyUpdated', lobbyList => {
            let lobbyArray = [];
            for(var key in lobbyList){
                lobbyArray.push({socketid: key, name: lobbyList[key]});
            }
            this.setState({lobbyArray: lobbyArray})
        });
    }
    componentWillReceiveProps(nextProps){
        if(!this.props.socket && nextProps.socket){ //Recebe o novo socket
            this.updateSocket(nextProps.socket);
        }
    }
    render() {
        if(this.props.inMatch) return null;
         return (
            <div className="LobbyList">
                <p> esse é o lobby</p> 
                <Button handle={this.enterQueueHandle} name={'Entrar'}/>
                <Button handle={this.exitQueueHandle} name={'Sair'}/>
                <LobbyButtonsList lobbyArray={this.state.lobbyArray} handle={this.startMatchHandle}/>
            </div>
         );
    }

} 

export default Lobby;