# # Odd/Even
def odd_even():
    for i in range(1,2001):
        if (i % 2 == 0):
            print "Number is " + str(i) + ". This is an even number."
        else:
            print "Number is " + str(i) + ". This is an odd number."
odd_even()

# # Multiply
def multiply(a, num):
    for i in range(len(a)):
        a[i] *= num
    return a
a = [2,4,10,16]
print multiply([2,4,10,16], 5)

# Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for i in arr:
        one_arr = []
        for x in range(0,i):
            one_arr.append(1)
        new_array.append(one_arr)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
