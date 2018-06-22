function Ninja(name, str, spd, hlt){
    this.name = name;

    if(spd == undefined){ var speed = 3; }
    else{ var speed = spd; }
    if(str == undefined){ var strength = 3; }
    else{ var strength = str; }
    if(hlt == undefined){ this.health = 100; }
    else{ this.health = hlt; }

    this.sayName = function(){
        console.log("My ninja name is "+ this.name);
    }
    this.showStats = function(){
        console.log("Name: "+this.name+"\nHealth: "+this.health+"\nSpeed: "+this.speed+"\nStrength: "+this.strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log("Ninja had Sake");
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();