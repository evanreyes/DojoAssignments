class Car(object):
    # this init function will automatically display all attributes on instantiation
    def __init__(self, name, price, speed, fuel, mileage):
        self.name = name
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.display_all()

    # this section is pretty straightforward
    # the only logic we need apply is on the price
    # the tax rate changes depending on the car's price
    def display_all(self):
        print "Car: " + self.name
        print "Price: $" + str(self.price)
        print "Speed: " + str(self.speed) + "mph"
        print "Fuel: " + self.fuel
        print "MPG: " + str(self.mileage) + "mpg"
        if self.price >= 10000:
            print "Tax: 0.15", "\n"
        else:
            print "Tax: 0.12", "\n"

# these instantiations will automatically print all data to the console
car1 = Car("Toyota Camry", 9000, 100, "Full", 26)
car2 = Car("Ford Focus", 14000, 100, "Empty", 30)
car3 = Car("Honda Fit", 9500, 100, "1/2 Full", 32)
car4 = Car("Jeep Grand Cherokee", 22000, 100, "3/4 Full", 22)
car5 = Car("Subaru Outback", 15000, 100, "1/3 Full", 27)
car6 = Car("Volkswagen Jetta", 18000, 100, "2/3 Full", 29)
