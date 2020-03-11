const express = require('express');
const {Game} = require('./../models/game');

let router = express.Router();

router.get('/', (req, res, next) => {

    // let games = [
    //     {name: 'Bloodborne'},
    //     {name: 'Dark Souls 3'},
    //     {name: 'Sekiro: Shadows Die Twice'},
    // ];

    Game.findAll()
        .then((games) => {
            // console.log('games', games);
            res.render('games/index', {
                games
            });
        })
        .catch((err) => {
            res.render('games/index', {
                games: []
            });
        });
});


router.get('/create', (req, res, next) => {
    res.render('games/create');
});

router.post('/create', (req, res, next) => {
    let game = req.body;

    if (!game.name || game.name === "") {
        return res.render('games/create', {errorMessage: "Please add a valid name."});
    }

    Game.create(game)
        .then(() => {
            res.redirect('/games/');
        })
        .catch((err) => {
            console.error("Error trying to create Game: ", err);
            res.render('games/create');
        });
});

router.post('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Game.destroy({
        where: {
            id: id,
        },
    }).then(() => {
        res.redirect('/games');
    }).catch((err) => {
        console.error(`Error trying to delete game with id ${id}: `, err);
        res.redirect('/games');
    })
});

module.exports = router;