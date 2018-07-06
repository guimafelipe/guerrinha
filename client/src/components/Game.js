import React, { Component } from 'react';

class Game extends Component {
    constructor (socket) {
        super();
        this.state = {
            socket: socket,
        }
    }

    componentDidMount(){
        //pedir aqui informações do socket
    }
    render (){
        return (
            <p>Aqui aparece coisas do gameplay </p>
        )
    }

}

export default Game;