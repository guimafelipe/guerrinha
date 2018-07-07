import React, { Component } from 'react';
import Button from './Button';

class ButtonsGroup extends Component {
    constructor (props) {
        super();
        this.state = {
            shotHandle: props.shotHandle,
            reloadHandle: props.reloadHandle,
            shieldHandle: props.shieldHandle,
            quitHandle: props.quitHandle,
        }
    }

    render (){
        return (
            <div>
                <Button handle={this.state.shotHandle} name={"Shot"}/>
                <Button handle={this.state.reloadHandle} name={"Reload"}/>
                <Button handle={this.state.shotHandle} name={"Shield"}/>
                <Button handle={this.state.shieldHandle} name={"Quit"}/>
            </div>
        );
    }
}

export default ButtonsGroup;