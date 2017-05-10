l = ['hello','world','my','name','is','Anna']
char = 'a'
n = ''
ls = []
for item in l:
    n = item.find(char)
    if (n >= 0):
        ls.append(item)
print ls
