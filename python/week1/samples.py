name = "Evan"
num = 12
print "My name is", name, num

name = "Evan"
num = 12
print "My name is " + name + str(num)


first_name = "Kevin"
last_name = "Rays"
print "My name is {} {}".format(first_name, last_name)


print "bananas".isalpha()

for count in range(0,5):
    print "looping - ", count

my_list = [1, 5, "coo", "cat", ["rabbit", 9, "butt"]]
for i in my_list:
    print i

count = 0
while count < 5:
    print "looping - ", count
    count += 1

for val in "string":
    if val == "i":
        continue
    print val

x = 3
y = x
while y > 0:
    print y
    y = y -1
else:
    print "final statement"

x = "1"
y = 2
print x + str(y)
