const Sequelize = require('sequelize');

const UserModel = require('../2 - Domain/user');
const AppointmentModel = require('../2 - Domain/appointment');
const ServiceModel= require('../2 - Domain/service');
const ServiceTypeModel= require('../2 - Domain/serviceType');
const PaymentModel= require('../2 - Domain/payment_history');

const sequelize = new Sequelize('IA3enEeEY3', 'IA3enEeEY3', 'CQMgCR6Bst', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Service = ServiceModel(sequelize, Sequelize);
const ServiceType = ServiceTypeModel(sequelize, Sequelize);
const Appointment = AppointmentModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);


sequelize.sync({ force: false})
.then(() => {
    console.log('Tablas sincronizadas');
})

module.exports = {
    User,
    Service,
    ServiceType,
    Appointment,
    Payment
}