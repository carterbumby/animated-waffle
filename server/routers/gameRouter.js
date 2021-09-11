const express = require('express');
const router = express.Router();

const GameService = require('../services/game-service');

router.get('/games', (req, res) => {
    GameService.get(req, res);
});

router.put('/game', (req, res) => {
    GameService.create(req, res);
});

router.post('/game', (req, res) => {
    GameService.update(req, res);
});

router.delete('/game/:id', (req, res) => {
    GameService.destroy(req, res);
});

module.exports = router;