const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
    show_all: function(req, res) {
        Person.find({}, function(err, persons) {
            if (err) {
                console.log('Oops! Something went wrong with displaying the list: ', err);
                res.redirect('/');
            }
            else {
                res.json(persons);
            }
        })
    },

    new_name: function(req, res) {
        let person = new Person({ name: req.params.name });
        person.save(function(err) {
            if (err) {
                console.log('Something went wrong with adding your person:', err);
                res.redirect('/');
            }
            else {
                console.log('Successfully added', req.params.name, 'to the database');
                res.redirect('/');
            }
        })
    },

    destroy: function(req, res) {
        Person.remove({ name: req.params.name }, function(err, result) {
            if (err) {
                console.log('Something went wrong with removing your person:', err);
                res.redirect('/');
            }
            else {
                console.log('Successfully removed ', req.params.name);
                res.redirect('/')
            }
        })
    },

    show_one: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person) {
            if (err) {
                console.log('Something went wrong with displaying this person:', err);
            }
            else {
                res.json(person);
            }
        })
    }
}
