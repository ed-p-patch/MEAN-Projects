class Ninja {
    constructor(nam, hlt, spd, str){
        this.name = nam;
        if(hlt == undefined){ this.health = 100; }
        else{ this.health = hlt; }
        if(spd == undefined){ this.speed = 3; }
        else{ this.speed = spd; }
        if(str == undefined){ this.strength = 3; }
        else{ this.strength = str; }
    }

    sayName(){
        console.log("Name: "+this.name);
    }
    showStats(){
        console.log("Stats\nHealth:"+this.health+"\nSpeed:"+this.speed+"\nStrength:"+this.strength);
    }
    drinkSake(){
        console.log(this.name+" had sake to drink");
        this.health += 10;
    }
}

var blueNinja = new Ninja("Blu", 120, 4, 2);
blueNinja.sayName();
blueNinja.showStats();
blueNinja.drinkSake();

class Sensei extends Ninja {
    constructor(nam, hlt, spd, str, wis){
        super(nam, hlt, spd, str);
        super.name = nam;
        if(hlt == undefined){ super.health = 200; }
        else{ super.health = hlt; }
        if(spd == undefined){ super.speed = 10; }
        else{ super.speed = spd; }
        if(str == undefined){ super.strength = 10; }
        else{ super.strength = str; }
        if(wis == undefined){ super.wisdom = 10;}
        else{ super.wisdom = wis; }
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months");
        super.drinkSake();
    }
}

var trueNinja = new Sensei("Master Splinter", 250, undefined, undefined, 40);
trueNinja.sayName();
trueNinja.showStats();
trueNinja.speakWisdom();