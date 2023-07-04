import { Router } from 'express';
import { GamesService } from '../services/games-service.js';
var router = Router();

const gamesService = new GamesService();

router.get("/games", function (req, res) {
    const games = gamesService.getAllGames();
    res.json(games);
})

export default router;