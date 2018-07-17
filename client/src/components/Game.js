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
            playerAnim: 'idle',
            enemyAnim: 'idle',
            roundStage: 'inputStage', 
        }
        this.shotHandle = this.shotHandle.bind(this);
        this.reloadHandle = this.reloadHandle.bind(this);
        this.shieldHandle = this.shieldHandle.bind(this);
        this.quitHandle = this.quitHandle.bind(this);
    }

    shotHandle () {
        if(this.socket){
            this.myAction = 'shot';
            this.socket.emit("setAction", {action: this.myAction}); //Need to emit here because server will not wait for events.
            // To improve the UX, should wait server send action confirmation to disable the button
        }
    }

    reloadHandle () {
        if(this.socket){
            this.myAction = 'reload';
            this.socket.emit("setAction", {action: this.myAction});
        }
    }

    shieldHandle () {
        if(this.socket){
            this.myAction = 'shield';
            this.socket.emit("setAction", {action: this.myAction});
        }
    }

    quitHandle () {
        if(this.socket){
            this.myAction = 'quit';
            this.socket.emit("setAction", {action: this.myAction});
        }
    }

    updateSocket(skt){
        if(this.socket) return;
        this.socket = skt;
        this.socket.on('stateUpdate', ({player1, player2}) => {
            this.setState({
                playerName: player1.name,
                playerBullets: player1.bullets,
                playerLifes: player1.lifes,
                enemyName: player2.name,
                enemyBullets: player2.bullets,
                enemyLifes: player2.lifes,
            });
        });
        this.socket.on('roundStart', () => {
            this.myAction = 'nothing';
            this.socket.emit("setAction", {action: this.myAction});
            this.setState({
                roundStage: 'inputStage',
                playerAnim: 'idle',
                enemyAnim: 'idle',
            });
        })
        this.socket.on('roundEnd', ({playerAnim, enemyAnim}) => {
            this.setState({
                roundStage: 'animationStage',
                playerAnim: playerAnim,
                enemyAnim: enemyAnim,
            });
        });
        this.socket.on('matchEnd', (result) => {
            this.setState({roundStage: result});
        });
        this.socket.on('updatedActionFeedback', (action) => {
            //Inserir aqui logia para deixar o botão ativado
            //De acordo com a action
        });
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.socket && nextProps.socket){ //Recebe o novo socket
            this.updateSocket(nextProps.socket);
        }
    }

    render (){
        // if(!this.props.inMatch) return null;
        return (
            <div className="game">
                <EnemyUI name={this.state.enemyName} bullets={this.state.enemyBullets} lifes={this.state.enemyLifes}/>
                <p></p>
                <p>{this.state.roundStage}</p>
                <p></p>
                <GameScreen enemyState={this.state.playerAnim} playerState={this.state.enemyAnim}/>
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