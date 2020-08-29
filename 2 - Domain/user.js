module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        surname: type.STRING,
        phone: type.INTEGER,
        ext: type.STRING,
        phone: type.INTEGER,
        birthday: type.DATE,
        email: type.STRING,
        password: type.STRING
    });
}