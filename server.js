const express = require("express");
const http = require("http");
const socket = require("socket.io");
const Player = require('./gameobjects/Player')
const Match = require('./gameobjects/Match')

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socket(server);

// players = []; // Lista de players online
// Primeiro vou fazer um teste com dos players só
// matches = []; // Lista de partidas acontecendo

const matches = [];

const lobby = new Lobby();

function socketSetup(socket){
    socket.queueState = 'free';
    socket.name = 'new player';
    socket.on("setAction", data => {
        // Como identificar a match?
        // matches[data.matchid].update...
        // match.updateNextAction(socket.id, data.action);
        // Provavelmente o melhor a se fazer é passar isso pra dentro da match
    });
    socket.on('enterQueue', () => {
        socket.queueState = 'onQueue';
        lobby.addToLobby(socket.id);
    });
    socket.on('exitQueue', () => {
        socket.queueState = 'free';
        lobby.removeFromLobby(socket.id);
    });
    socket.on('setName', name => {
        socket.name = name;
    });
    socket.on('startMatch', oponentid => {
        let match = lobby.createMatchWith(socket.id, oponentid);
        if(match) matches.push(match);
    });
}

io.on("connection", socket => {
    console.log("New client connected");
    socketSetup(socket);
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));