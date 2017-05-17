# Multiples, Part I
# on line 5 we define the range, since it goes up to the last number, we call the end point 1001 to include 1000
# using modulo and checking if the remainder is zero will tell us if the number is even or not
# by using continue, we skip the even numbers, then use print to only show odds
for count in range(1,1001):
    if count % 2 == 0:
        continue
    print count

# Multiples, Part II
# I set count to 5 since that is our starting point
# we then loop through until we reach 1,000,000, printing each number
# by adding 5 at the end of each loop, we only print multiples of 5
count = 5
while count <= 1000000:
    print count
    count += 5

# Sum List
# luckily, Python has a built-in sum() function
# we can leave the numbers as-is (integers) since we are just finding a sum
a = [1, 2, 5, 10, 255, 3]
b = sum(a)
print b

# Average List
# we start with the same list as before, and run the same sum() function
# however, this time we want an average, which will likely produce a decimal
# on line 32 we render the numbers as floats so the results do not get rounded to integers
# print it as a float to preserve the decimal (if applicable)
a = [1, 2, 5, 10, 255, 3]
b = float(sum(a)) / float(len(a))
print float(b)
