const express = require('express');

const createController = require('../controllers/createController');
const deleteController = require('../controllers/deleteController');
const editController = require('../controllers/editController');
const getController = require('../controllers/getController');

const router = express.Router();

router
  .route('/')
  .post(createController.createArtist)
  .delete(deleteController.deleteArtist)
  .put(editController.editArtist)
  .get(getController.getArtist);

router.route('/all').get(getController.getAllArtist);
router.route('/tracks').get(getController.getArtistTracks);
router.route('/tracks/all').get(getController.getAllArtistAndTracks);

module.exports = router;
