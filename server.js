const express = require("express");
const http = require("http");
const socket = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socket(server);

const getApiAndEmit = "TODO";

players = []; // Lista de players online
//Primeiro vou fazer um teste com dos players só
matches = []; // Lista de partidas acontecendo

io.on("connection", socket => {
    console.log("New client connected");
    socket.on("disconnect", () => console.log("Client disconnected"));
    socket.on("setState", res => {
        console.log(res.state);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));