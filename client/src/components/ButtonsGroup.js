import React, { Component } from 'react';
import Button from './Button';

class ButtonsGroup extends Component {
    render (){
        return (
            <div>
                <Button handle={this.props.shotHandle} name={"Shot"}/>
                <Button handle={this.props.reloadHandle} name={"Reload"}/>
                <Button handle={this.props.shieldHandle} name={"Shield"}/>
                <Button handle={this.props.quitHandle} name={"Quit"}/>
            </div>
        );
    }
}

export default ButtonsGroup;