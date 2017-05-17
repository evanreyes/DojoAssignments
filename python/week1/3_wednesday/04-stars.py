# # Part I
def draw_stars(x):
    for i in range(len(x)):
        a = x[i]
        print "*" * a

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

# Part II
def draw_stars_strings(y):
    for i in range(len(y)):
        if isinstance(y[i], int):
            a = y[i]
            print "*" * a
        else:
            b = y[i][0]
            print b.lower() * len(y[i])

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars_strings(y)
