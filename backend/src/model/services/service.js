// import Pessoa from "./entity.js";
// const { Pessoa } = require("../data/entity.js");

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

async function findAll() {
  // const MVC = Pessoa;

  // try {
  await MVC.sync({ alter: true });
  console.log("The table for the Pessoa model was just syncronized!");
  const Pessoas = await MVC.findAll();
  const todosRegistros = JSON.stringify(Pessoas, null, 2);
  console.log(todosRegistros);
  console.log(typeof todosRegistros);
  return todosRegistros;
  // } catch (error) {
  //   return `Ocorreu um erro: ${error.message}`
  // }
}
console.log(findAll())

// export default PessoaDAO;
module.exports = { findAll };
