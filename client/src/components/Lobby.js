import React, { Component } from 'react';

class Lobby extends Component {
    constructor (){
        super();
        this.state = {
            playersList: [] // a player is identified by his name and socket id
            //we use this to create a game
        }
    }
    render() {
         return (
            <div className="LobbyList">
               <p> esse é o lobby</p> 
            </div>
         ); //Aqui deve ter um for iterando em playersList pra criar botões 
    }

} 

export default Lobby;