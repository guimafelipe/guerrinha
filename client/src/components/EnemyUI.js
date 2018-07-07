import React, { Component } from 'react';
import Bullets from './Bullets';
import Lifes from './Lifes';

class EnemyUI extends Component {
    render (){
        return (
            <div>
                <div> {this.props.name} </div>
                <Lifes qnt={this.props.lifes}/>
                <Bullets qnt={this.props.bullets}/>
            </div>
        );
    }
}

export default EnemyUI;