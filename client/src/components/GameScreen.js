import React, { Component } from 'react';

class GameScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            playerState: props.playerState,
            enemyState: props.enemyState,
        }
    }

    render (){
        return (
            <div>
                <span> Player: {this.state.playerState}</span>
                <span> x </span>
                <span> Enemy: {this.state.enemyState}</span>
            </div>
        );
    }
}

//Renderiza a ação do inimigo e a ação do player

export default GameScreen;