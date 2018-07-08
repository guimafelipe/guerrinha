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
//Primeiro vou fazer um teste com dos players só
// matches = []; // Lista de partidas acontecendo

function pushState(socketID, match){
    io.sockets.connected[socketID].emit("stateUpdate", match.state(socketID));
}

function sendEventToGame(event, room, msg){
}

function socketSetup(socket){
    socket.on("setAction", action => {
        match.updateNextAction(socket.id, action.action);
        match.updateStates();
        pushState(player1.id, match);
        pushState(player2.id, match);
    });
}

var player1, player2, match;

function gameLoop(match){
    //io manda evento de que vai começar

    //espera ok dos players

    //começa rounds
    //emit evendo de start round
    //faz loop pra emitir eventos de countdown

    //pega o input
    //atualiza o estado

    //dá push nos inputs
    
}

io.on("connection", socket => {
    console.log("New client connected");
    if(!player1) {
        player1 = new Player("fulano1", socket.id);
    } else {
        player2 = new Player("fulano2", socket.id);
        match = new Match(player1, player2);
        socketSetup(io.sockets.connected[player1.id]);
        socketSetup(socket);
    }
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));