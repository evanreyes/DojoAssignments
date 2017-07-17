let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res) {
    // res.render("index");
})

// app.post('/', function(req, res) {
//     res.render("index");
// })

app.post('/results', function(req, res) {
	let postData = req.body;
	res.render("results", {postData});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
