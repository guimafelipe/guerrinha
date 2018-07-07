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
                <div>Player {this.state.playerState}</div>
                <div> x </div>
                <div>Enemy {this.state.enemyState}</div>
            </div>
        );
    }

}

//Renderiza a ação do inimigo e a ação do player

export default GameScreen;