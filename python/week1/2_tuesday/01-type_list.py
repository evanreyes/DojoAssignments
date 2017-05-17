
def typeList(list):
    s = 0
    i = 0
    strs = ''
    ints = 0
    for item in list:
        if isinstance(item, str) == True:
            s += 1
            strs += item + ' '
        else:
            i += 1
            ints += item
    if s and i > 0:
        print "The list you entered is of mixed type"
        print "String:", strs
        print "Sum:", ints
    elif s > 0 and i == 0:
        print "The list you entered is of string type"
        print "String:", strs
    else:
        print "The list you entered is of integer type"
        print "Sum:", ints


typeList(['magical unicorns',19,'hello',98.98,'world'])
