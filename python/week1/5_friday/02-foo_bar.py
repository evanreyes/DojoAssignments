def checkNum(num):
    sqrt = num ** .5
    if sqrt == (num // sqrt):
        return str(num) + ": Bar"
    else:
        for i in range(2,num):
            if num % i == 0:
                return str(num) + ": FooBar"
        return str(num) + ": Foo"

def foo_bar(num1, num2):
    for i in range(num1, num2+1):
        print checkNum(i)

foo_bar(100, 1000)
