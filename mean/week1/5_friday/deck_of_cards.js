function Deck() {
    this.deck = [];
    this.suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    this.value = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
}

// When this function runs, it serves to reset the deck, meaning no separate reset function is necessary
Deck.prototype.assembleDeck = function() {
    for (let x = 0; x < this.suit.length; x++) {
        for (let y = 0; y < this.value.length; y++) {
            this.deck.push(`${this.value[y]} of ${this.suit[x]}`);
        }
    }
    return this.shuffle();
}

// Fisher-Yates shuffle algorithm
Deck.prototype.shuffle = function() {
    var m = this.deck.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
    }
    return this;
}

// Put a card from a random index into the empty "card" array we instantiated for the Deck object
Deck.prototype.deal = function() {
    let random_index = Math.floor(Math.random() * this.deck.length);
    const card = this.deck[random_index];
    this.deck.splice(random_index, 1);
    return card;
}

// A player has a name, and an empty hand
function Player(name) {
    this.name = name;
    this.hand = [];
}

// Grab the card from the deal function and put it into the player's hand array
Player.prototype.dealHand = function(numCards, deck) {
    for (let i = 1; i <= numCards; i++) {
        this.hand.push(deck.deal());
    }
    console.log(this.hand);
    return this;
}


let deck1 = new Deck()
let player1 = new Player("Phil Ivey")
deck1.assembleDeck()
console.log(player1.name)
player1.dealHand(4, deck1)
