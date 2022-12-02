const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mydb', 'Adesh', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to DataBase');
    })
    .catch(err => {
        console.log("error" + err);
    });
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./model/users')(sequelize, DataTypes);
db.campaign = require('./model/campaign')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync');
    })

module.exports = db;


