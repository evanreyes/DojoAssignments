class Product(object):
    # three attributes will be set to default values and will not require passing arguments:
    # cost, discount, and status
    # these will always be the same on instantiation
    def __init__(self, name, price, weight, brand):
        self.name = name
        self.price = price
        self.weight = weight
        self.brand = brand
        self.cost = 0
        self.discount = "None"
        self.status = "For sale"

    # update the product's status and return self for further chaining
    def sell(self):
        self.status = "Sold"
        return self

    # calculate tax based on a decimal that will be passed in
    # round to two decimal places to reflect actual money prices
    # return the value for further chaining
    def addTax(self, taxRate):
        self.cost = round((self.price + (self.price * taxRate)), 2)
        return self

    # defective products will not be available for sale
    # open box products will have a 20% discount applied
    # all other reasons passed in will not affect the status or discount
    def returnProduct(self, reason):
        if reason == "defective":
            self.status = "Defective"
            self.price = 0
            self.discount = "N/A"
        elif reason == "open box":
            self.status = "Used"
            self.price *= .8
            self.discount = "20%"
        return self

    # displays all product info and includes new line for readability
    def displayInfo(self):
        print "Product: " + self.name
        print "Price: $" + str(self.price)
        print "Weight: " + str(self.weight) + " lbs"
        print "Brand: " + self.brand
        print "Cost: $" + str(self.cost)
        print "Status: " + self.status
        print "Discount: " + self.discount + "\n"

# instantiate three products, in this case home audio items
product1 = Product("Subwoofer", 349, 25.5, "Klipsch")
product2 = Product("Monitor Speaker", 249, 10.3, "Klipsch")
product3 = Product("Amplifier", 1499, 27, "Klipsch")

# all of the different methods in action
product1.addTax(0.099).displayInfo()
product2.returnProduct("open box").addTax(.101).displayInfo()
product3.returnProduct("defective").displayInfo()
