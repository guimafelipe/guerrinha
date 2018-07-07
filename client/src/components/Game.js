import React, { Component } from 'react';
import EnemyUI from './EnemyUI';
import GameScreen from './GameScreen';
import PlayerUI from './PlayerUI';
// import ButtonsGroup from './ButtonsGroup';

class Game extends Component {
    constructor (props) {
        super();
        this.state = {
            socket: props.socket,
        }
    }

    componentDidMount(){
        //pedir aqui informações do socket
    }
    render (){
        return (
            <div class="game">
                <EnemyUI enemyName={"inimigo"} bullets={2} lifes={3}/>

                <GameScreen enemyState={"idle"} playerState={"idle"}/>

                <PlayerUI playerName={"player"} bullets={3} lifes={1}/>

                <p>Aqui aparece coisas do gameplay </p>
            </div>
        )
    }

}

/*Adversario ui (nome, balas, vidas)*/
//Tela do jogo
//Ação do player x ação do adversário

//Player ui (balas e vidas)

//Botões de ação (carregar defender atacar (bazuca?))


export default Game;