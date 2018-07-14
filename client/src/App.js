import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Lobby from "./components/Lobby";
import Game from "./components/Game";

const SERVER = "127.0.0.1:";
const PORT = "4001";

class App extends Component {
  constructor(){
    super();
    this.state = {
      response: false,
      endpoint: SERVER + PORT,
      socket: null,
      inMatch: false,
    }
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const skt = socketIOClient(endpoint);
    skt.name = 'player';
    skt.on('matchLeave', () => {
      this.setState({inMatch: false, socket: skt})
    });
    skt.on('matchStart', () => {
      this.setState({inMatch: true, socket: skt})
    });
    this.setState({socket: skt});
  }

  render() {
    return (
      <div className="App">
        <Lobby inMatch={this.state.inMatch} socket={this.state.socket}/>
        <Game inMatch={this.state.inMatch} socket={this.state.socket}/>
      </div>
    );
  }
}

export default App;
