const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.resolve('static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

let meerkatSchema = new mongoose.Schema({
    	name: { type: String, required: [true, 'Name required'], unique: true},
        age: { type: Number, required: [true, 'Age required'] },
        speed: { type: Number, required: [true, 'Speed required'] },
        food: { type: String, required: [true, 'Age required'] },
        created_at: { type: Date }
    });

mongoose.model('Meerkat', meerkatSchema);
let Meerkat = mongoose.model('Meerkat')
function imageID() {
    return (Math.floor(Math.random() * 20) + 1);;
};

app.get('/', function(req, res) {
    console.log(imageID())
    Meerkat.find({}, function(err, meerkats) {
        if(err) {
            console.log('Oops! Something went wrong with displaying the meerkats: ', err);
            res.redirect('/');
        }
        else {
            res.render("index", { meerkats, rand: imageID() });
        }
    })
})

app.get('/meerkats/new', function(req, res) {
    let rand = imageID();
    res.render("new", { rand: imageID() });
})

app.get('/meerkats/:id', function(req, res){
    let rand = imageID();
    Meerkat.find({ _id: req.params.id }, function(err, response) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('show', { meerkat: response[0], rand: imageID() });
        }
    });
});

app.post('/meerkats', function(req, res) {
    console.log("POST DATA", req.body);
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
})

app.get('/meerkats/edit/:id', function(req, res) {
    let rand = imageID();
    Meerkat.find({ _id: req.params.id }, function(err, response) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('edit', { meerkat: response[0], rand });
        }
    });
})

app.post('/meerkats/:id', function(req, res) {
    Meerkat.update({ _id: req.params.id }, req.body, function(err, result){
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
})

app.post('/meerkats/destroy/:id', function(req, res) {
    Meerkat.remove({ _id: req.params.id }, function(err, result){
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
