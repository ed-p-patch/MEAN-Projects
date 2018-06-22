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
    this.punch = function(other_ninja){
        if(other_ninja instanceof Ninja){
            console.log(this.name+" punched "+other_ninja.name);
            other_ninja.health -= 5;
        }
        else{
            console.log("Not a Ninja");
        }
    }
    this.kick = function(other_ninja){
        if(other_ninja instanceof Ninja){
            console.log(this.strength);
            var damage = this.strength * 15;
            console.log(this.name+" kicked "+other_ninja.name+" for "+damage+" damage");
            other_ninja.health -= damage;
        }
        else{
            console.log("Not a ninja");
        }
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);