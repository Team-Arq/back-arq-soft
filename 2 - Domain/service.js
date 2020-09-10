module.exports = (sequelize, type) => {
    return sequelize.define('service', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        type:type.STRING,
        description: type.STRING,
        price:type.STRING
    });
}