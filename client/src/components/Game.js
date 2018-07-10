import React, { Component } from 'react';
import EnemyUI from './EnemyUI';
import GameScreen from './GameScreen';
import PlayerUI from './PlayerUI';
import ButtonsGroup from './ButtonsGroup';

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            playerName: "player",
            enemyName: "inimigo",
            playerBullets: 1,
            enemyBullets: 2,
            playerLifes: 3,
            enemyLifes:2,
        }
        this.shotHandle = this.shotHandle.bind(this);
        this.reloadHandle = this.reloadHandle.bind(this);
        this.shieldHandle = this.shieldHandle.bind(this);
        this.quitHandle = this.quitHandle.bind(this);
    }

    shotHandle () {
        if(this.socket){
            this.socket.emit("setAction", {action: "shot"});
        }
    }

    reloadHandle () {
        if(this.socket){
            this.socket.emit("setAction", {action: "reload"});
        }
    }

    shieldHandle () {
        if(this.socket){
            this.socket.emit("setAction", {action: "shield"});
        }
    }

    quitHandle () {
        if(this.socket){
            this.socket.emit("setAction", {action: "quit"});
        }
    }

    updateSocket(skt){
        if(this.socket) return;
        this.socket = skt;
        this.socket.on('stateUpdate', (state) => {
            console.log(state); // Just for debug
        });
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.socket && nextProps.socket){ //Recebe o novo socket
            this.updateSocket(nextProps.socket);
        }
    }

    render (){
        return (
            <div className="game">
                <EnemyUI name={this.state.enemyName} bullets={this.state.enemyBullets} lifes={this.state.enemyLifes}/>
                <p></p>
                <GameScreen enemyState={"idle"} playerState={"idle"}/>
                <p></p>
                <PlayerUI name={this.state.playerName} bullets={this.state.playerBullets} lifes={this.state.playerLifes}/>
                <p></p>
                <ButtonsGroup shotHandle={this.shotHandle} reloadHandle={this.reloadHandle}
                 shieldHandle={this.shieldHandle} quitHandle={this.quitHandle}/>
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