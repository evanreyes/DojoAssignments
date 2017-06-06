class Bike(object):
    # init function to set attributes of Bike object
    # include Bike name to differentiate various instances
    # all Bikes will start at 0 miles
    def __init__(self, name, price, max_speed):
        self.name = name
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    # create and print strings for each attribute
    def displayInfo(self):
        print "Bike: " + self.name
        print "Price: $" + str(self.price)
        print "Max Speed: "+ str(self.max_speed) + "mph"
        print "Miles Ridden: " + str(self.miles)

    # add 10 miles on each ride() call, print "Riding..." to show user this is working
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self

    # subtract 5 miles, but only if there are at least 5 miles already accrued
    # this prevents creating a negative value for miles
    def reverse(self):
        if self.miles >= 5:
            print "Reversing..."
            self.miles -= 5
            return self
        else:
            print "Cannot reverse any farther!"
            return self

# instantiate three objects, passing in data for each
bike1 = Bike("Specialized Allez", 1200, 25)
bike2 = Bike("Cannondale CAAD12", 2000, 30)
bike3 = Bike("Pinarello Dogma F10", 10000, 45)

# add a new line at the end of each method chain to reduce visual clutter
print bike1.ride().ride().ride().reverse().displayInfo(), "\n"
print bike2.ride().ride().reverse().reverse().displayInfo(), "\n"
print bike3.reverse().reverse().reverse().displayInfo(), "\n"
