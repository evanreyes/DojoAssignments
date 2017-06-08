class MathDojo(object):
    def __init__(self):
        self.total = 0

    def add(self, *arg):
		for i in arg:
			if type(i) == int:
				self.total += i
			elif type(i) == list:
				for num in i:
					self.total += num
			elif type(i) == tuple:
				for i in i:
					self.total += i
		return self

    def subtract(self, *arg):
        for i in arg:
            if type(i) == int:
                self.total -= i
            elif type(i) == list:
                for num in i:
                    self.total -= num
            elif type(i) == tuple:
                for i in i:
                    self.total -= i
        return self

    def result(self):
        print self.total


md = MathDojo().add(2).add(2, 5).subtract(3, 2).result()
md = MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 6.3, 1.25]).subtract(2, [9,3], [1.1, 2.3]).result()
