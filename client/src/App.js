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
      endpoint: SERVER + PORT
    }
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
  }

  render() {
    return (
      <div className="App">
        <Lobby/>
        <Game/>
      </div>
    );
  }
}

export default App;
