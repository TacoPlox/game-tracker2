const { Game } = require('./../models/game');

let games = [
    { name: 'Bloodborne' },
    { name: 'Dark Souls 3' },
    { name: 'Sekiro: Shadows Die Twice' },
];

let gamePromisesArray = games.map((game) => {
    return Game.create(game);
});

let promiseGames = Promise.all(gamePromisesArray);

promiseGames.then(() => {
    console.log(`Inserted ${games.length} games.`);
}).catch((err) => {
    console.error("Error trying to insert games: ", err);
});
