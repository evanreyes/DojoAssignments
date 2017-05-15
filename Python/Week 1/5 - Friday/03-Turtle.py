# try this either as a .py file or in the python shell
import turtle
# the distance we want the pointer to travel each time
DIST = 10
for x in range(0,30):
    print "x", x
    for y in range(1,30):
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(20)
        # advance according to set distance
        turtle.forward(DIST)
    # add to set distance
    DIST += 5
