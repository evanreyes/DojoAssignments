# Find and Replace
str = "It's thanksgiving day. It's my birthday, too!"
print str.find("day")
new_str = str.replace("day", "month")
print new_str

# Min and Max
x = [2,54,-2,7,12,98]
print min(x), max(x)

# First and Last
y = ["hello",2,54,-2,7,12,98,"world"]
print y[0], y[len(y) - 1]

# New List
z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
print z
new_z = []
new_z.append(z[0:(len(z)/2)])
print new_z + z[(len(z)/2):]
