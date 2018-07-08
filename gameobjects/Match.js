const Player = require('./Player');

module.exports = class Match {
    constuctor(nome1, nome2){
        this.player1 = new Player(nome1);
        this.player2 = new Player(nome2);
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
            aux = res.player1;
            res.player1 = res.player2;
            res.player2 = aux;
        }
        return res;
    }

    updateNextAction(plyerid, action){
        if(this.player1.id == playerid){
            this.p1_nextAction = action;
        } else if (this.player2.id == playerid){
            this.p2_nextAction = action;
        }
    }

    updateStates(){
        this.turnCheck(this.p1_nextAction, this.p2_nextAction);
    }
}