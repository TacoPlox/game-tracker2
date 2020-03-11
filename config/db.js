const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('games', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err);
    });


// sequelize
//     .sync()
//     .then(() => {
//         console.log("All models synchronized correctly.");
//     })
//     .catch(() => {
//         console.error("Error trying to synchronize models: ", err);
//     });


module.exports = {sequelize};