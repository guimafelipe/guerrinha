import React, { Component } from 'react';

class GameScreen extends Component {
    render (){
        return (
            <div>
                <div>Player {this.props.playerState}</div>
                <div> x </div>
                <div>Enemy {this.props.enemyState}</div>
            </div>
        );
    }

}

//Renderiza a ação do inimigo e a ação do player

export default GameScreen;