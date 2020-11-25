module.exports = (sequelize, type) => {
    return sequelize.define("payment", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: type.STRING,
      price: type.STRING,
      id_user: type.INTEGER,
      id_service: type.INTEGER,
    });
  };
  