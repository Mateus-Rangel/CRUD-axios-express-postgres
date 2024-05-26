const { MVC } = require("../data/entity.js");

async function findAll() {
  try {
    await MVC.sync({ alter: true });
    console.log("The table for the Pessoa model was just syncronized!");
    const Pessoas = await MVC.findAll();
    const todosRegistros = JSON.stringify(Pessoas, null, 2);
    return todosRegistros;
  } catch (error) {
    return `Ocorreu um erro: ${error.message}`;
  }
}

module.exports = { findAll };
