class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake()
        console.log("'You miss 100% of the shots you don't take. -- Wayne Gretzky' -- Michael Scott")
    }
}

let ninja1 = new Ninja("Bjorlax")
let ninja2 = new Sensei("Kevin")
ninja1.drinkSake()
ninja1.showStats()

ninja2.speakWisdom()
ninja2.showStats()
