def whoami(me):

    for key, data in me.iteritems():
        print "My", key, "is", data

me = {"name": "Kevin Rays.", "age": "31.", "hometown": "Bellingham."}
whoami(me)


def person(a):
    for key, value in a.iteritems():
        print str(value) + " is my " + str(key) + "."

bio = {"name": "Todd Dan", "age": "50", "job": "Unemployment", "favorite beer": "Astral Projection"}
person(bio)
