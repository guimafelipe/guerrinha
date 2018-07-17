import React, { Component } from 'react';
// import Button from './Button';
import {Button, Spinner, Intent} from '@blueprintjs/core';

class ButtonsGroup extends Component {
    render (){
        return (
            <div>
                {/* <Button handle={this.props.shotHandle} name={"Shot"}/>
                <Button handle={this.props.reloadHandle} name={"Reload"}/>
                <Button handle={this.props.shieldHandle} name={"Shield"}/>
                <Button handle={this.props.quitHandle} name={"Quit"}/> */}
                <Button intent="success" text="shot" onClick={this.props.shotHandle}/>
                <Spinner intent={Intent.PRIMARY} />;
            </div>
        );
    }
}

export default ButtonsGroup;