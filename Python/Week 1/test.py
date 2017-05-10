# def add(a,b):
#   x = a + b
#
# # the return value gets assigned to the "result" variable
# result = add(3,5)
# print result # this should print 8
#
# def multiply(arr,num):
#     for x in range(len(arr)):
#         arr[x] *= num
#     return arr
#
# a = [2,4,10,16]
# b = multiply(a,5)
# print b
#
#
# dog = ("Canis Familiaris", "dog", "carnivore", 12)
# dog = dog + ("domestic",)
# dog = dog[:3] + ("man's best friend",) + dog[4:]
# print dog
# print sorted(dog)
#
# import math
#
# def get_circle_area(r):
#     #Return (circumference, area) of a circle of radius r
#     c = 2 * math.pi * r
#     a = math.pi * r * r
#     return (c, a)
#
# print get_circle_area(5)
#
# weekend = {"Sun": "Sunday", "Mon": "Monday"}
# print weekend.values()

# context = {
#   'questions': [
#    { 'id': 1, 'content': 'Why is there a light in the fridge and not in the freezer?'},
#    { 'id': 2, 'content': 'Why don\'t sheep shrink when it rains?'},
#    { 'id': 3, 'content': 'Why are they called apartments when they are all stuck together?'},
#    { 'id': 4, 'content': 'Why do cars drive on the parkway and park on the driveway?'}
#    ]
#  }
#
# for key, data in context.items():
#      #print data
#      for value in data:
#           print "Question #", value["id"], ": ", value["content"]
#           print "----"

# data = {"house":"Haus","cat":"Katze","red":"rot"}
# print data.values()

dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
countries = ["Italy", "Germany", "Spain", "USA"]

country_specialties = zip(countries, dishes)
# print country_specialties
country_specialties_dict = dict(country_specialties)
print country_specialties_dict
