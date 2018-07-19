import React, { Component } from 'react';
import {Text} from '@blueprintjs/core';

class Lifes extends Component {
    render (){
        return (
            <div>
                <Text> Lifes: {this.props.qnt}</Text>
            </div>
        );
    }
}

export default Lifes;