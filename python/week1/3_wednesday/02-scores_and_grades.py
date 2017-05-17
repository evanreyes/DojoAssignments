import random
def grade(scores):
    print "Scores and Grades"
    for i in range (0,scores):
        random_num = random.randint(60,101)
        if (random_num >= 90):
            print "Score: " + str(random_num) + "; Your grade is A"
        elif (random_num >= 80):
            print "Score: " + str(random_num) + "; Your grade is B"
        elif (random_num >= 70):
            print "Score: " + str(random_num) + "; Your grade is C"
        else:
            print "Score: " + str(random_num) + "; Your grade is D"
    print "End of the program. Bye!"
grade(10)
