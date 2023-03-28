const playerController = require('../controllers/player.cotroller');
const express = require("express");
const playerRoutes = express.Router();

playerRoutes.post('/player', playerController.createPlayers);
playerRoutes.get('/player', playerController.getPlayers);

module.exports = playerRoutes;