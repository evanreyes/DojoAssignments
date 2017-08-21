const note_controller = require('../../controllers/note.controller');
const router = require('express').Router();

module.exports = router
  .get('/', note_controller.index)
  .post('/', note_controller.create);
