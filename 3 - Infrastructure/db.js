const Sequelize = require('sequelize');

const UserModel = require('../2 - Domain/user');
const AppointmentModel = require('../2 - Domain/appointment');
const ServiceModel= require('../2 - Domain/service')

const sequelize = new Sequelize('OPBgkKxGJI', 'OPBgkKxGJI', 'FpB7NOnR2p', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Service = ServiceModel(sequelize, Sequelize);
const ServiceType = ServiceModel(sequelize, Sequelize);
const Appointment = AppointmentModel(sequelize, Sequelize);


sequelize.sync({ force: false})
.then(() => {
    console.log('Tablas sincronizadas');
})

module.exports = {
    User,
    Service,
    ServiceType,
    Appointment
}