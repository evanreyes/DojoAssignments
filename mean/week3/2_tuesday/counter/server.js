let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Declaring a global variable for our running count
let count = 0

// On page load, increment the count by 1, and pass that variable into our EJS template
app.get('/', function(req, res) {
    count += 1;
    res.render("index", {count: count});
})

// Route to handle our "add two" button, which will insert an extra incrementation
// Since the root route already adds one, this will have the effect of adding two to the count
app.post('/plus_two', function(req, res) {
    count += 1;
    res.redirect('/');
})

// Clicking the reset button will move count to zero, but then return it to 1 upon hitting the root route
app.post('/reset', function(req, res) {
    count = 0;
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
