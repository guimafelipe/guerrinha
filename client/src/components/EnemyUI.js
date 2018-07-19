import React, { Component } from 'react';
import Bullets from './Bullets';
import Lifes from './Lifes';
import {H5} from '@blueprintjs/core';

class EnemyUI extends Component {
    render (){
        return (
            <div>
                <H5> {this.props.name} </H5>
                <Lifes qnt={this.props.lifes}/>
                <Bullets qnt={this.props.bullets}/>
            </div>
        );
    }
}

export default EnemyUI;