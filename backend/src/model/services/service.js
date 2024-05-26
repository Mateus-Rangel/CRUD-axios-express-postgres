const { MVC } = require("../data/entity.js");

async function findAll() {
  try {
    await MVC.sync({ alter: true });
    console.log("The table for the Pessoa model was just syncronized!");
    const Pessoas = (await MVC.findAll()).sort((a, b) => a.id - b.id);
    const todosRegistros = JSON.stringify(Pessoas, null, 2);
    return todosRegistros;
  } catch (error) {
    return `Ocorreu um erro: ${error.message}`;
  }
}

async function addPerson(data) {
  try {
    const pessoa = await MVC.create(data);
    return pessoa;
  } catch (error) {
    return `Ocorreu um erro: ${error.message}`;
  }
}

async function updatePerson(data) {
  try {
    const updatedPessoa = await MVC.update(
      { nome: data.nome, idade: data.idade },
      { where: { id: data.id } }
    );
    return updatedPessoa;
  } catch (error) {
    return `Ocorreu um erro: ${error.message}`;
  }
}

async function deletePerson(data) {
  try {
    const removedPessoa = await MVC.destroy({ where: { id: data.id } });
    return removedPessoa;
  } catch (error) {
    return `Ocorreu um erro: ${error.message}`;
  }
}

module.exports = { findAll, updatePerson, addPerson, deletePerson };
