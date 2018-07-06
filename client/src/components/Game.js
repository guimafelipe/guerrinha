import React, { Component } from 'react';
import EnemyUI from './EnemyUI';
import GameScreen from './GameScreen';
import PlayerUI from './PlayerUI';
import ButtonsGroup from './ButtonsGroup';

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
            //Adversario ui (nome, balas, vidas)
            //<EnemyUI/>

            //Tela do jogo
            //Ação do player x ação do adversário
            
            //Player ui (balas e vidas)

            //Botões de ação (carregar defender atacar (bazuca?))


            <p>Aqui aparece coisas do gameplay </p>
        )
    }

}

export default Game;