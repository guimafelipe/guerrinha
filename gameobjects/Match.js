const Player = require('./Player');

module.exports = class Match {
    constructor(player1, player2, io, room){
        this.player1 = player1;
        this.player2 = player2;
        this.io = io;

        this.loopState = 'awaiting';

        // Setup sockets rooms
        this.gameLoop();
    }

    turnCheck(action1, action2){ //strings
        if(action1 === "shot"){
            if(this.player1.canShoot && action2 !== "shield") {
                this.player2.getDamage(1);
                this.player1.shoot();
            }
        }

        if(action2 === "shot"){
            if(this.player2.canShoot && action1 !== "shield") {
                this.player1.getDamage(1);
                this.player2.shoot();
            }
        }

        if(action1 === "reload") this.player1.reload();

        if(action2 === "reload") this.player2.reload();
    }

    winCheck(){
        if(this.player1.isDead && this.player2.isDead){
            return 'draw';
        }

        if(this.player1.isDead){
            return '2win';
        }

        if(this.player2.isDead){
            return '1win';
        }

        return 'notyet';
    }

    state(playerid){
        let res = {
            player1: this.player1,
            player2: this.player2,
        };
        if(playerid == this.player2.id){
            let aux = res.player1;
            res.player1 = res.player2;
            res.player2 = aux;
        }
        return res;
    }

    updateNextAction(playerid, action){
        if(this.player1.id == playerid){
            this.p1_nextAction = action;
        } else if (this.player2.id == playerid){
            this.p2_nextAction = action;
        }
    }

    countdown(seconds){
        return new Promise(resolve => {
            setTimeout(resolve, seconds*1000);
        });
    }

    async gameLoop(){
        await this.pushStates();
        while(this.winCheck() == 'notyet'){
            console.log('loop started');
            this.sendEventToPlayers('roundStart');
            await this.countdown(5);
            console.log('countdown ended');
            this.sendEventToPlayers('roundEnd');
            await this.updateStates();
            await this.pushStates();
            await this.countdown(1);
        }
        console.log(this.winCheck());
    }

    pushStates(){
        return new Promise(resolve => {
            this.io.sockets.connected[this.player1.id].emit('stateUpdate', this.state(this.player1.id));
            this.io.sockets.connected[this.player2.id].emit('stateUpdate', this.state(this.player2.id));
            resolve();
        })
    }

    updateStates(){
        return new Promise(resolve => {
            this.turnCheck(this.p1_nextAction, this.p2_nextAction);
            console.log(this.p1_nextAction, this.p2_nextAction);
            resolve();
        });
    }

    sendEventToPlayers(message){ //Need to refactor this to rooms, maybe better even with only 2 player per room
        this.io.sockets.connected[this.player1.id].emit(message);
        this.io.sockets.connected[this.player2.id].emit(message);
    }

}