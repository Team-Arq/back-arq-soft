module.exports = (sequelize, type) => {
    return sequelize.define('appointment', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
}