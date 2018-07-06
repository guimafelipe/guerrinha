import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
