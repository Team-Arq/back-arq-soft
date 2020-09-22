module.exports = (sequelize, type) => {
    return sequelize.define('service_type', {
        idTypeService: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameTypeService: type.STRING,
        description: type.STRING,
    });
}