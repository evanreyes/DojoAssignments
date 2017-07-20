const express = require( "express");
const path = require( "path");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve('static')));

app.get('/', function(req, res) {
    res.render("index.ejs");
})

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));

const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log(`Client/socket is connected on ${ socket.id }`);

    socket.on('posting_form', function (post_data){
        console.log(post_data)
        let rand = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', { post_data, rand });
    })
})
