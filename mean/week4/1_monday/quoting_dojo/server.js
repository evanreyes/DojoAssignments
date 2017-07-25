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

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

let quoteSchema = new mongoose.Schema({
    	name: { type: String, required: [true, 'Name required'] },
    	quote: { type: String, require: [true, 'Quote required'] },
        created_at: { type: Date }
    });

mongoose.model('Quote', quoteSchema);
let Quote = mongoose.model('Quote')


app.get('/', function(req, res) {
    res.render("index");
})

app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  let quote = new Quote({name: req.body.name, quote: req.body.quote, created_at: Date.now()});
  quote.save(function(err) {
    if(err) {
      console.log('Something went wrong: ', err);
    }
    else {
      console.log('Successfully added a quote!');
      res.redirect('/');
    }
  })
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log('Oops! Something went wrong with displaying the quotes: ', err);
            res.redirect('/');
        }
        else {
            res.render("quotes", { quotes });
        }
    })
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.

})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
