module.exports = (sequelize, type) => {
    return sequelize.define('service_type', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        icon: type.STRING,
        description: type.STRING,
    });
}