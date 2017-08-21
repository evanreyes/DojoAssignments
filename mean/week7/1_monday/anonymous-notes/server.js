const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 4200;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

require('./server/config/database');

app.use('/notes', require('./server/config/routes/notes.routes'));

app.listen(port, () => console.log(`Listening on port ${ port }`));