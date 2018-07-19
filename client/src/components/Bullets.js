import React, { Component } from 'react';
import {Text} from '@blueprintjs/core';

class Bullets extends Component {
    render (){
        return (
            <div>
                <Text> Bullets: {this.props.qnt}</Text>
            </div>
        );
    }
}

export default Bullets;