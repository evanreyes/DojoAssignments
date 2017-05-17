# # Part I
#
# students = [
#      {'first_name':  'Michael', 'last_name': 'Jordan'},
#      {'first_name': 'John', 'last_name': 'Rosales'},
#      {'first_name': 'Mark', 'last_name': 'Guillen'},
#      {'first_name': 'KB', 'last_name': 'Tonel'}
# ]
#
# for item in students:
#     print item['first_name'], item['last_name']

# Part II
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }


for key, value in users.items():
    print key
    order = 1
    for item in users[key]:
        namelength = len(item['first_name']) + len(item['last_name'])
        print str(order) + " - " + str(item['first_name'].upper()) + " " + str(item['last_name'].upper()) + " - " + str(namelength)
        order += 1
