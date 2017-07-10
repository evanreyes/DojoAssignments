function Ninja(name) {
    let health = 100;
    let speed = 3;
    let strength = 3;
    this.name = name;

    this.updateHealth = function(damage) {
        health -= damage;
    }

    this.readHealth = function() {
        return health;
    }

    this.sayName = function() {
        console.log("Name: " + this.name);
        return this;
    };

    this.drinkSake = function() {
        health += 10;
        return this;
    };

    this.showStats = function() {
        console.log("Name: " + this.name + ", Current health: " + health + ", Speed: " + speed + ", Strength: " + strength);
    };

    this.punch = function(target) {
        if (target instanceof Ninja) {
            target.updateHealth(5);
            console.log(target.name + " was punched by " + this.name + " and lost 5 health!");
        }
        else {
            console.log("You can't punch a non-Ninja!")
        }
    }

    this.kick = function(target) {
        if (target instanceof Ninja) {
            let kick_damage = 15 * Number(strength);
            target.updateHealth(kick_damage);
            console.log(target.name + " was punched by " + this.name + " and lost " + kick_damage + " health!");
        }
        else {
            console.log("You can't kick a non-Ninja!")
        }
    }
}

var blue_ninja = new Ninja("Bjorlax")
var red_ninja = new Ninja("Kevin")

red_ninja.kick(blue_ninja)
console.log(blue_ninja.showStats())
