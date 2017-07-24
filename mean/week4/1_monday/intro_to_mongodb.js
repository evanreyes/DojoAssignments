// 1. Create a database called 'my_first_db'.
> use my_first_db

// 2. Create students collection.
> db.createCollection("students")

// 3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
> db.students.insert({ name: "Chris Froome", home_state: "Great Britain", lucky_number: 1, birthday: {month: 5, day: 20, year: 1985} })
> db.students.insert({ name: "Taylor Phinney", home_state: "Colorado", lucky_number: 186, birthday: {month: 6, day: 27, year: 1990} })
> db.students.insert({ name: "Tejay Van Garderen", home_state: "Washington", lucky_number: 99, birthday: {month: 8, day: 12, year: 1988} })

// 4. Create 5 students with the appropriate info.
> db.students.insert({ name: "Kiel Reijnen", home_state: "Washington", lucky_number: 80, birthday: {month: 6, day: 1, year: 1986} })
> db.students.insert({ name: "Andrew Talansky", home_state: "California", lucky_number: 6, birthday: {month: 11, day: 23, year: 1988} })

// 5. Get all students.
> db.students.find().pretty()

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
> db.students.find({ $or: [{ home_state: "Washington" }, { home_state: "California" }] }).pretty()

// 7. Get all students whose lucky number is:
>

// 8. greater than 3
> db.students.find({ lucky_number: { $gt: 3 } }).pretty()

// 9. less than or equal to 10
> db.students.find({ lucky_number: { $lte: 10 } }).pretty()

// 10. between 1 and 9 (inclusive)
> db.students.find({ lucky_number: {$gte: 1, $lte: 9} }).pretty()

// 11. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
> db.students.update({}, {$set: {interests: ['coding', 'brunch', 'MongoDB'] }}, {multi: true})

// 12. Add some unique interests for each particular students into each of their interest arrays.
> db.students.update({ name: "Chris Froome"}, {$push: {interests: "winning four Tours"} })
> db.students.update({ name: "Taylor Phinney"}, {$push: {interests: "growing a sick mustache"} })
> db.students.update({ name: "Tejay Van Garderen"}, {$push: {interests: "having a cool name"} })
> db.students.update({ name: "Kiel Reijnen"}, {$push: {interests: "island life"} })
> db.students.update({ name: "Andrew Talansky"}, {$push: {interests: "suffering"} })

// 13. Add the interest 'taxes' into someone's interest array.
> db.students.update({name: "Chris Froome"}, {$push: {interests: "taxes"}})

// 14. Remove the 'taxes' interest you just added.
> db.students.update({name: "Chris Froome"}, { $pop: { interests: 1 } })

// 15. Remove all students who are from California (or Washington).
> db.students.remove({ $or: [{ home_state: "Washington" }, { home_state: "California" }] })

// 16. Remove a user by name.
> db.students.remove({ name: "Taylor Phinney" })

// 17. Remove a student whose lucky number is greater than 5 (JUST ONE)
> db.students.remove({ lucky: { $gt: 5 } }, true)

// 18. Add a field to each student collection called 'number_of_belts' and set it to 0.
> db.students.update({}, {$set: {number_of_belts: 0 }}, {multi: true})

// 19. Increment this field by 1 for all students in Washington (Seattle Dojo).
> db.students.update({ home_state: "Washington" }, {$inc: {number_of_belts: 1 }}, {multi: true})

// 20. Rename the 'number_of_belts' field to 'belts_earned'
> db.students.update({}, {$rename: {"number_of_belts": "belts_earned" }}, {multi: true})

// 21. Remove the 'lucky_number' field.
> db.students.update({}, {$unset: {lucky_number: ""}}, {multi: true})

// 22. Add a 'updated_on' field, and set the value as the current date.
> db.students.update({}, {$currentDate: { updated_on: { $type: "date" } }}, {multi: true})
