import services from "../services/services.js";
import inputs from "../view/inputHandler.js";

const getAll = document.getElementById("getAll");
getAll.addEventListener("click", async () => {
  await services.pegarTodos();
});

document.addEventListener("click", async function (event) {
  if (String(event.target.id).includes("alterarRegistro")) {
    const index = event.target.id.split("alterarRegistro")[1];
    const input = new inputs();
    const pessoa = {
      nome: input.nome,
      idade: input.idade,
      id: index,
    };
    await services.alterarRegistro(pessoa);
  }
  if (String(event.target.id).includes("removerRegistro")) {
    const index = event.target.id.split("removerRegistro")[1];
    await services.removerRegistro(index);
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  console.log('teste')
  event.preventDefault();
  const input = new inputs();
  const pessoa = { nome: input.nome, idade: input.idade };
  await services.addPessoa(pessoa);
});
