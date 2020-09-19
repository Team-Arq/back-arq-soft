module.exports = (sequelize, type) => {
    return sequelize.define('service', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        typeService: type.STRING,
        description: type.STRING,
        price: type.STRING
    });
}