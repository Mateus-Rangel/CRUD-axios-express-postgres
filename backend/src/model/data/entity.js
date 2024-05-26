const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection/index.js");

const MVC = sequelize.define(
  "MVC",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    idade: {
      type: DataTypes.CHAR,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
  }
);

module.exports = {MVC};
