import random
def coin_toss():
    print "Starting the program..."
    h = 0
    t = 0
    for i in range(1,5001):
        result = round(random.random())
        if (result == 0):
            h += 1
            print "Attempt #"+str(i)+": Flipping a coin... You got heads! The total so far is " + str(h) + " head(s) and " + str(t) +" tails."
        else:
            t +=1
            print "Attempt #"+str(i)+": Flipping a coin... You got tails! The total so far is " + str(h) + " head(s) and " + str(t) +" tails."
    print "Ending the program. Thank you!"

coin_toss()
