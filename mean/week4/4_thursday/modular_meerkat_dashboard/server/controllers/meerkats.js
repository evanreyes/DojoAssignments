const mongoose = require('mongoose');
const Meerkat = mongoose.model('Meerkat');

function imageID() {
    return (Math.floor(Math.random() * 20) + 1);;
};

module.exports = {
    show_all: function(req, res) {
        Meerkat.find({}, function(err, meerkats) {
            if(err) {
                console.log('Oops! Something went wrong with displaying the meerkats: ', err);
                res.redirect('/');
            }
            else {
                res.render("index", { meerkats, rand: imageID() });
            }
        })
    },

    add_new: function(req, res) {
        let rand = imageID();
        res.render("new", { rand: imageID() });
    },

    show_one: function(req, res) {
        let rand = imageID();
        Meerkat.find({ _id: req.params.id }, function(err, response) {
            if (err) {
                console.log(err);
            }
            else {
                res.render('show', { meerkat: response[0], rand: imageID() });
            }
        });
    },

    create: function(req, res) {
        let meerkat = new Meerkat({name: req.body.name, age: req.body.age, speed: req.body.speed, food: req.body.food,created_at: Date.now()});
        meerkat.save(function(err) {
          if(err) {
            console.log('Something went wrong with adding your meerkat: ', err);
          }
          else {
            console.log('Successfully added a meerkat to the pack!');
            res.redirect('/');
          }
        })
    },

    edit: function(req, res) {
        let rand = imageID();
        Meerkat.find({ _id: req.params.id }, function(err, response) {
            if (err) {
                console.log(err);
            }
            else {
                res.render('edit', { meerkat: response[0], rand });
            }
        });
    },

    update: function(req, res) {
        Meerkat.update({ _id: req.params.id }, req.body, function(err, result){
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/');
            }
        });
    },

    destroy: function(req, res) {
        Meerkat.remove({ _id: req.params.id }, function(err, result){
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/');
            }
        });
    }
}
