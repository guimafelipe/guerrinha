import React, { Component } from 'react';
import Bullets from './Bullets';

class EnemyUI extends Component {
    constructor (props) {
        super();
        this.state = {
            name: props.enemyName,
            bullets: props.bullets,
            lifes: props.lifes,
        }
    }

    render (){
        return (
            <div>
                <div> {this.state.name} </div>
                <Bullets qnt={this.state.bullets}/>
            </div>
        );
    }
}

export default EnemyUI;