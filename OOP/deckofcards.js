class Card{
    constructor(){
        const suits = ['Heats', 'Spades', 'Clubs', 'Diamonds'];
        const strs = ['Ace', '1', '2', '3', '4', '5', '6', '7',
                        '8', '9', '10', 'Jack', 'Queen', 'King'];
    }
    show(){ console.log(this._stri+" of "+this._suit); }
}

class Deck extends Card{
    constructor(){
        super();
        this.deck = [];
        this.drawn = [];
        super.xsuits = super.suits;
    }

    show(){
        console.log(this.cc);
    };
    
    create(){
        for(var x = 0; x < super.suits.length; ++x){
            for(var y = 0; y < super.strs.length; ++y){
                this.deck.push(super.strs[y]+' of '+super.suits[x]);
                console.log("Added the "+this.deck[this.deck.length-1]);
            }
        }
        console.log('Deck with '+this.deck.length+' cards created');
    }

    shuffle(){ //Fisher-Yates algorithm
        var x, y, z;
        for(z = this.deck.length - 1; z > 0; --z){
            x = Math.floor(Math.random() * (z + 1));
            y = this.deck[z];
            this.deck[z] = this.deck[x];
            this.deck[x] = y;
        }
    }
    deal(){
        this.drawn.push(this.deck[this.deck.length-1]);
        console.log("The "+this.deck[length-1]+" was drawn");
        this.deck.pop();
    }
    return(){
        this.deck.push(this.drawn[this.drawn.length-1]);
        console.log("The "+this.drawn[this.drawn.length-1]+" was returned to the deck");
        this.drawn.pop();
    }
    reset(){
        this.deck = [];
        this.drawn = [];
        create();
    }
}

var blueDeck = new Deck;
blueDeck.show();
blueDeck.create();
blueDeck.deal();
blueDeck.deal();
blueDeck.deal();
blueDeck.deal();
blueDeck.return();
blueDeck.return();
