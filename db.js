const Sequelize = require('sequelize');

const UserModel = require('./models/user');

const sequelize = new Sequelize('OPBgkKxGJI', 'OPBgkKxGJI', 'FpB7NOnR2p', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false})
.then(() => {
    console.log('Tablas sincronizadas');
})

module.exports = {
    User
}