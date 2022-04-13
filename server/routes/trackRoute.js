const express = require('express');

const createController = require('../controllers/createController');
const deleteController = require('../controllers/deleteController');
const editController = require('../controllers/editController');
const getController = require('../controllers/getController');

const router = express.Router();

router
  .route('/')
  .post(createController.createTrack)
  .delete(deleteController.deleteTrack)
  .put(editController.editTrack)
  .get(getController.getAllTrack);

router.route('/filter').get(getController.getFilterTracks);

module.exports = router;
