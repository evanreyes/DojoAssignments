const mongoose = require('mongoose');
const meerkats = require('../controllers/meerkats.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        meerkats.show_all(req, res);
    })

    app.get('/meerkats/new', function(req, res) {
        meerkats.add_new(req, res);
    })

    app.get('/meerkats/:id', function(req, res){
        meerkats.show_one(req, res);
    });

    app.post('/meerkats', function(req, res) {
        meerkats.create(req, res);
    })

    app.get('/meerkats/edit/:id', function(req, res) {
        meerkats.edit(req, res);
    })

    app.post('/meerkats/:id', function(req, res) {
        meerkats.update(req, res);
    })

    app.post('/meerkats/destroy/:id', function(req, res) {
        meerkats.destroy(req, res);
    })
}
