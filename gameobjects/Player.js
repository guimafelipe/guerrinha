module.exports = class Player{
    // name
    // lifes
    // bullets
    constructor(name){
        this.name = name;
        this.bullets = 0;
        this.lifes = 3;
    }

    reload(){
        this.bullets++;
    }

    getDamage(dmg){
        this.lifes -= dmg;
    }

    shoot(){
        this.bullets -= 1;
    }

    get canShot(){
        if(this.bullets >= 0) return true;
        return false;
    }
}