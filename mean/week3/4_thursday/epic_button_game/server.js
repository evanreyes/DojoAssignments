const express = require( "express");
const path = require( "path");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));

const io = require('socket.io').listen(server);

let count = 0;

io.sockets.on('connection', function (socket) {
    console.log(`Client/socket is connected on ${ socket.id }`);

    socket.on('epic', () => {
		update(++count);
        console.log(`Epic button was clicked, current count is ${ count }`);
	});

    socket.on('reset', () => {
		update(count = 0);
        console.log(`Reset button was clicked, current count is ${ count }`);
	});

    function update(count) {
		io.sockets.emit('update', count);
	}
})
