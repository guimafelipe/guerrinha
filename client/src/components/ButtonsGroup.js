import React, { Component } from 'react';
// import Button from './Button';
import {Button} from '@blueprintjs/core';

class ButtonsGroup extends Component {
    render (){
        return (
            <div>
                {/* <Button handle={this.props.shotHandle} name={"Shot"}/>
                <Button handle={this.props.reloadHandle} name={"Reload"}/>
                <Button handle={this.props.shieldHandle} name={"Shield"}/>
                <Button handle={this.props.quitHandle} name={"Quit"}/> */}
                <Button intent="primary" text="shot" onClick={this.props.shotHandle}/>
                <Button intent="primary" text="reload" onClick={this.props.reloadHandle}/>
                <Button intent="primary" text="shield" onClick={this.props.shieldHandle}/>
                <Button intent="primary" text="quit" onClick={this.props.quitHandle}/>
            </div>
        );
    }
}

export default ButtonsGroup;