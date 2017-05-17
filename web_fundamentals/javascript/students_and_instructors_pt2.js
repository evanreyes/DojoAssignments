var users = {
 'Students': [
     {first_name :  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log('Students')
for (var x = 0; x < users['Students'].length; x++){
    var rank = x + 1;
    var namelength = users['Students'][x].first_name.length + users['Students'][x].last_name.length;
    console.log(rank+" - "+users['Students'][x].first_name+" "+users['Students'][x].last_name+" - " + namelength);
}

console.log('Instuctors')
for (var x = 0; x < users['Instructors'].length; x++){
    var rank = x + 1;
    var namelength = users['Instructors'][x].first_name.length + users['Instructors'][x].last_name.length;
    console.log(rank+" - "+users['Instructors'][x].first_name+" "+users['Instructors'][x].last_name+" - " + namelength);
}
