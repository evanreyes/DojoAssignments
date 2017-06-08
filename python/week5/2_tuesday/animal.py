class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print self.name + " health: " + str(self.health)
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def display_dragon_health(self):
        super(Dragon, self).display_health()
        print "I am a dragon!"
        return self

doge = Dog("Marley")
doge.walk().walk().walk().run().run().pet().display_health()

dragon = Dragon("Drogon")
dragon.walk().walk().walk().run().run().fly().display_dragon_health()

animal = Animal("Babe")
animal.walk().walk().walk().run().run().display_health()
