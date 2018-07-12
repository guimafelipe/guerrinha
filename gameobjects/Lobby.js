const Player = require('./Player');
const Match = require('./Match');

module.exports = class Lobby{
    constructor(io, matchManager){
        this.queueUsers = {}; //My dict of online users
                              //Schema socketid: name
        this.io = io;
        this.matchManager = matchManager;
    }

    addToLobby(socketid, name){
        this.queueUsers[socketid] = name;
        this.onLobbyUpdated();
    }

    removeFromLobby(socketid){
        if(this.queueUsers.hasProperty(socketid)) delete this.queueUsers[socketid];
        this.onLobbyUpdated();
    }

    createMatchWith(challangerid, existentid){
        if(!this.queueUsers.hasProperty(existentid)) return null;
        let challangerName = this.io.sockets.connected[challangerid].name;
        let existentName = this.queueUsers[existentid];
        this.removeFromLobby(existentid);
        return this.matchManager.createNewMatch({id: existentid, name: existentName}, {id: challangerid, name: challangerName});
    }

    onLobbyUpdated(){
        this.io.emit("lobbyUpdated", this.queueUsers);
    }

}

//Oh lobby, oh lobby, oh lobby, oH lOBBY, OH LOBBY, lobby LOBBY, lOBBY, lobbY LoBbY lObBy looooobobby - O Rappa